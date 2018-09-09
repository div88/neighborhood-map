



let fourSquareClientID = "4U5M2HATNE0NVXDMXPKAH25ZXPKEUZSTCNREZ1OOVLSHRR20";
let fourSquareSecret = "ARYZDYHVFTCJCDNP3DTLMCIFQ1XXSX25N2W2LFKUSLOEZGZ0";
var apiFourSquare = "https://api.foursquare.com/v2/venues";
         

export const getlocationInfo = (item) =>
  fetch(`${apiFourSquare}/${item.venueID}?client_id=${fourSquareClientID}&client_secret=${fourSquareSecret}&v=20180908`)
  .then(response=>response.json())
  .catch('error')
  