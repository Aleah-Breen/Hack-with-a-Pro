function initMap() {
    // Diddy Riese data (for now)
    const loc_Diddy_Riese = new google.maps.LatLng(34.063050026926234, -118.44685020759215);
    var mapProp= {
      center: loc_Diddy_Riese,
      zoom: 20,
    };
  
    // Define a map variable
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    // Define a Marker variable for Diddy Riese
    var marker = new google.maps.Marker(
        { 
            map: map,
            position: loc_Diddy_Riese,
        }
    );

    // Given an address, website will put a Marker of the address on the Google Map
    var addressDummy = "922 Gayley Ave, Los Angeles, CA 90024";
    // var addressDummy = document.getElementById("address");


    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        address: addressDummy}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker(
                {
                    map: map,
                    position: results[0].geometry.location,
                }
            )
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}