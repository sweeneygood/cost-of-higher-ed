

//////// Create the markers for each institution and call createMap function to create the map
// Query url to pull our institution data
// let queryUrl = "http://127.0.0.1:5000/api/v1.0/institutions"

// d3.json(queryUrl).then(createMarkers)

// function createMarkers(data) {
//     // Array to store school markers
//     let schoolMarkers = [];
    
//     // Array of institutions in the data
//     let institutions = data.institutions;
    
//     // Loop through the institutions array and store a marker for each school
//     institutions.forEach(school => {
//         let lat = school.lat;
//         let lon = school.lon;
        
//         let marker = L.marker([lat, lon], {
//             title: school.institution
//         });
//         schoolMarkers.push(marker);
//     });

//     createMap(L.layerGroup(schoolMarkers));
// }

//////// Create the map
function createMap() {
    console.log("createMap running")
    let map = L.map("map", {
        center: [42.81, -107.09],
        zoom: 4,
    });

    L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
        accessToken: API_KEY
    }).addTo(map);
}

createMap();