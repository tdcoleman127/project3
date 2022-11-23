function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.029070294972136, lng: -87.73009732985915 },
    zoom: 11,
  });
  
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
