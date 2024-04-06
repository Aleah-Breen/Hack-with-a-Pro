function initMap() {
    // Diddy Riese data (for now)
    const loc_Diddy_Riese = new google.maps.LatLng(34.063050026926234, -118.44685020759215);
    var mapProp= {
      center: loc_Diddy_Riese,
      zoom: 50,
    };
  
    // Define a map variable
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
    // Define a Marker variable
    var marker = new google.maps.Marker({position: loc_Diddy_Riese});
  
    marker.setMap(map); 
}