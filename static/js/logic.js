// Function to initialize the webpage
function InitDashboard() {
    let pie_data = {
        total_men: 1,
        total_women: 1
    }
    let bar_data = {
        instate_tuition_fees: 20000,
        pell_grant: 7000,
        other_grant: 9500
    }

    // Draw the map and initial example plots
    let queryUrl = "/api/v1.0/institutions"
    d3.json(queryUrl).then(createMarkers);

    buildBarPlots(bar_data);
    buildPiePlots(pie_data);
}

// Event handler to run on marker clicks
function onClick(event) {
    updateBarPlots(event.target.options.bar_data);
    updatePiePlots(event.target.options.pie_data);
}

// Create the markers from the institution data
function createMarkers(data) {

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
                    institution: school.institution,
                    instate_tuition_fees: school.instate_tuition_fees,
                    pell_grant: school.avg_amount_pell_grants_first_time_full_time_undergrad,
                    other_grant: school.avg_amount_other_grant_aid_first_time_full_time_undergrad
                }

            }).on("click", onClick); //Run event handler on marker clicks

            marker.bindPopup(`${school.institution} <br>  Enrollment: ${school.total_enrollment} students`);
            schoolMarkers.push(marker);
        }
    });

    // Create the map passing in the schoolMarkers as a layergroup
    createMap(L.layerGroup(schoolMarkers));
}

// Create the map
function createMap(schoolsLayer) {

    // Base layer of map
    let baseMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "outdoors-v11",
        accessToken: API_KEY
    });

    // Render the map with the base and marker layers
    let map = L.map("map", {
        center: [40, -89.3985],
        zoom: 7,
        layers: [baseMap, schoolsLayer]
    });
}

InitDashboard();
