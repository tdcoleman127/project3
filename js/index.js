function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.058890, lng: -87.749071 },
    zoom: 12,
  });

  new google.maps.Marker({
    position: { lat: 42.058890, lng: -87.749071 },
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
