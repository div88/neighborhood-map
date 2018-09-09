# Neighborhood Map

Application utilizes the Google Maps API. A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.Clicking a location on the list displays unique information about the location. 

Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.Clicking a marker displays unique information about a location somewhere on the page.

The Application uses Google Maps API and Foursqaure API, for which free developer plans have been used and has some limitations in regards to the number of requests that can be made per day. The service worker can be used only in Production build.

## Table of Contents

- [Application Set Up](#application-setup)
- [Project Specifications](#project-specifications)
- [Contribution](#contribution)

### Application Set Up

* Clone or download the project from [here](https://github.com/div88/neighborhood-map)
* Type 'npm install' in terminal to install all the necessary packages.
* To run locally, 'npm start'


### Project Specifications

### Home Page

* Loading home page, loads Google map with default set of markers and a lit of locations and a text-input field.
* Includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. 
* A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.
Clicking a location on the list displays unique information about the location.
* Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.

Clicking a marker displays unique information about a location somewhere on the page (modal, separate div, inside an infoWindow).


### Contributions

React google maps (https://tomchentw.github.io/react-google-maps/#overlayview)
Foursquare Places API (https://developer.foursquare.com/places-api)
Google Maps API


