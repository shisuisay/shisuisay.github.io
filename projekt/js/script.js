function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(49.990889, 19.941606),
      zoom:10,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }