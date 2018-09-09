



let fourSquareClientID = "OIWI0WLGQNMENQ5KYDZ1HYXB3V1COTYWB0JY4EBGA2T5UVJJ";
let fourSquareSecret = "A1HHGHD4EKCJ2U21YREP52EHPUV1LESCYFLAS1KICQEAAZJ3";
var apiFourSquare = "https://api.foursquare.com/v2/venues";
         

export const getlocationInfo = (item) =>
  fetch(`${apiFourSquare}/${item.venueID}?client_id=${fourSquareClientID}&client_secret=${fourSquareSecret}&v=20180908`)
  .then(response=>response.json())
  .catch('error')
  