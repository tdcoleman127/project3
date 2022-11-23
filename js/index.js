function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.041165, lng: -87.680562 },
    zoom: 15,
  });
}

window.initMap = initMap;
