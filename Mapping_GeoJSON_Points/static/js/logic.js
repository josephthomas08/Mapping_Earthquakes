// Add console.log to check to see if our code is working.
// console.log("working");

// We create the tile layer that will be the background of our map.
var graymap = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
  //   id: "mapbox/light-v10",
  id:"mapbox/dark-v10",
  accessToken: API_KEY
  }
);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
Street: graymap,
Dark: dark
};


// Create the map object with a center and zoom level.
var map = L.map("mapid", {
  center: [
    30, 30
  ],
  zoom: 2,
  layers: [graymap]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
graymap.addTo(map);


// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Salmanbasharat/Mapping-Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";
//  let airportData = "C:\Users\salma\OneDrive\Documents\GitHub\Mapping-Earthquakes\majorAirports.json";
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map);
});



// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
// //   pointToLayer: function(feature, latlng) {
// //     console.log(feature);
// //     return L.marker(latlng)
// //     .bindPopup("<h2>" + feature.properties.city + "</h2>");
// //   }

// // }).addTo(map);

// //using onEachFeature for pop up marker for each feature

//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup();
//    }

// }).addTo(map);
