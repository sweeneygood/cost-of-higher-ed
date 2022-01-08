

//////// Create the markers for each institution and call createMap function to create the map
// Query url to pull our institution data
let queryUrl = "/api/v1.0/institutions"


function onClick(event) {
    console.log("Total men at school:", event.target.options.data.total_men);
    console.log("Total women at school:", event.target.options.data.total_women);
}


d3.json(queryUrl).then(createMarkers)

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
                data: {
                    total_men: school.total_men,
                    total_women: school.total_women
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