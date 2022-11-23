function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.029070294972136, lng: -87.73009732985915 },
    zoom: 11,
  });
}

window.initMap = initMap;
