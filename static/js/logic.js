
function InitDashboard(){
    let pie_data = {
        total_men: 0,
        total_women: 0
    }
    let bar_data = {
        instate_tuition_fees: 0,
        pell_grant: 0,
        other_grant: 0
    }

    //Draw the Map
    let queryUrl = "/api/v1.0/institutions"
    d3.json(queryUrl).then(createMarkers);

    buildBarPlots(bar_data); 
    buildPiePlots(pie_data);
}

function onClick(event) {
    buildBarPlots(event.target.options.bar_data);
    updatePiePlots(event.target.options.pie_data);
    //console.log("Financial Aid:", event.target.options.pie_data.total_men);
    //console.log("Tuition Prices:", event.target.options.bar_data.instate_tuition_fees);
}


function createMarkers(data) {
    console.log('creating markers');
    // Array to store school markers
    let schoolMarkers = [];
    
    // Array of institutions in the data
    let institutions = data.institutions;

    // Loop through the institutions array and store a marker for each school
    institutions.forEach(school => {
        if (school.state === "IL") {
            let lat = school.lat;
            let lon = school.lon;
            
            let marker = L.marker([lat, lon], {
                title: school.institution,
                pie_data: {
                    total_men: school.total_men,
                    total_women: school.total_women
                },
                bar_data: {
                    instate_tuition_fees: school.instate_tuition_fees,
                    pell_grant: school.avg_amount_pell_grants_first_time_full_time_undergrad,
                    other_grant: school.avg_amount_other_grant_aid_first_time_full_time_undergrad
                }

            }).on("click", onClick);

            marker.bindPopup(`${school.institution} <br>  Enrollment: ${school.total_enrollment} students`);
            schoolMarkers.push(marker);
        }
    });

    // Create the map passing in the schoolMarkers as a layergroup
    createMap(L.layerGroup(schoolMarkers));
}

//////// Create the map
function createMap(schoolsLayer) {
    console.log("createMap running")

    let baseMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "outdoors-v11",
        accessToken: API_KEY
    });

    let map = L.map("map", {
        center: [40.6331, -89.3985],
        zoom: 6,
        layers: [baseMap, schoolsLayer]
    });
}

InitDashboard();

//////// Create the markers for each institution and call createMap function to create the map
// Query url to pull our institution data
