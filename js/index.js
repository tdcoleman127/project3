function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.029070294972136, lng: -87.73009732985915 },
    zoom: 15,
  });

  new google.maps.Marker({
    position: new google.maps.LatLng(42.058890, -87.749071),
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
