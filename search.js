
let address = localStorage.getItem('address');

function retrieveData() {
    // Allows usage outside of program
    var address = document.getElementById("address").value;
    localStorage.setItem('address', address);
}

function initMap() {
    geocoder = new google.maps.Geocoder();

    geocoder.geocode({
        address: address}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
            locLoc = results[0].geometry.location;
            localStorage.setItem('locLoc', locLoc);
            var marker = new google.maps.Marker(
                {
                    map: map,
                    position: locLoc,
                }
            )
        }
    });

    // Diddy Riese data (for now)
    const loc_Diddy_Riese = new google.maps.LatLng(34.063050026926234, -118.44685020759215);
    var mapProp= {
      center: loc_Diddy_Riese,
      zoom: 15,
    };

    // Define a map variable
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    // Given an address, put a Marker of the address on the Google Map
    // In-N-Out Burger
    var addressDummy = "922 Gayley Ave, Los Angeles, CA 90024";
    var addressDummy2 = "1051 Broxton Ave, Los Angeles, CA 90024";
    var addressDummy3 = "1060 Tiverton Ave, Westwood Village, CA 90024";
    var addressList = [addressDummy,addressDummy2, addressDummy3];

    for (var i = 0; i < addressList.length; i++)
    {
        geocoder.geocode({
            address: addressList[i]}, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
                var marker = new google.maps.Marker(
                    {
                        map: map,
                        position: results[0].geometry.location,
                    }
                )
            }
        });
    
    }
}