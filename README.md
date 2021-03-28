# Mapping_Earthquakes
Plot Data on mapbox map through an API request .

## Project Plan
### Purpose
The main  purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days.

### Tasks
To complete this project, use a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then add the data to a map.

### Approach
Our  approach will be to use the JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. we Will further  use the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.

## Deliverable 1 
You will earn a perfect score for Deliverable 1 by completing all requirements below:

The tectonic plate data is added as a second layer group 
The tectonic plate data is added to the overlay object 
The d3.json() callback is working and does the following:
#### 1.The tectonic plate data is passed to the geoJSON() layer
#### 2. The geoJSON() layer adds color and width to the tectonic plate lines
#### 3.The tectonic layer group variable is added to the map
#### 4. The earthquake data and tectonic plate data displayed on the map when the page loads 



<img width="1636" alt="Screen Shot 2021-03-28 at 2 50 33 AM" src="https://user-images.githubusercontent.com/75267605/112744733-a149a780-8f70-11eb-8832-b19572559815.png">




## Deliverable 2 


The major earthquake data is added as a third layer group 
The major earthquake data is added to the overlay object 
The d3.json() callback is working and does the following: 
#### 1. Sets the color and diameter of each earthquake.
#### 2. The major earthquake data is passed to the geoJSON() layer.
#### 3. The geoJSON() layer creates a circle for each major earthquake, and adds a popup for each circle to display the magnitude and location of the earthquake
#### 4. The major earthquake layer group variable is added to the map
#### 5. All the earthquake data and tectonic plate data are displayed on the map when the page loads and the datasets can be toggled on or off (5 pt)


##### 1. Tectonics Data 



<img width="1675" alt="Tectonic plates " src="https://user-images.githubusercontent.com/75267605/112754338-96f7cf80-8fa9-11eb-9457-7ef82e8203ee.png">






##### 2. Earthquakes




<img width="1678" alt="Eathquakes" src="https://user-images.githubusercontent.com/75267605/112754342-9e1edd80-8fa9-11eb-8446-cf0c423d1f46.png">



##### 3. Major Earthquakes




<img width="1677" alt="Major Earthquakes " src="https://user-images.githubusercontent.com/75267605/112754349-a37c2800-8fa9-11eb-8e6f-1b1c25dfbfe5.png">




##### 4. All date together 




<img width="1674" alt="D2 3 3" src="https://user-images.githubusercontent.com/75267605/112754365-c1498d00-8fa9-11eb-9deb-77880ba22e3d.png">





## Deliverable 3 

A third map tile layer is created 
The third map is added to the overlay object
All the earthquake data and tectonic plate data are displayed on the all maps of the webpage 

### Three layers of maps 




<img width="1679" alt="Screen Shot 2021-03-28 at 3 18 33 AM" src="https://user-images.githubusercontent.com/75267605/112746099-cc38f900-8f7a-11eb-8a29-71838e45e3ed.png">






<img width="1675" alt="Screen Shot 2021-03-28 at 3 18 51 AM" src="https://user-images.githubusercontent.com/75267605/112746100-cd6a2600-8f7a-11eb-95f1-9ad34d49de2a.png">




<img width="1680" alt="Screen Shot 2021-03-28 at 3 19 07 AM" src="https://user-images.githubusercontent.com/75267605/112746102-ce02bc80-8f7a-11eb-94b7-0379e9a93b3e.png">




