function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.058890, lng: -87.749071 },
    zoom: 12,
  });

  new google.maps.Marker({
    position: { lat: 42.058890, lng: -87.749071 },
    map,
    title: "Mall!",
  });
  
  new google.maps.Marker({
    position: { lat: 42.009895, lng: -87.713161 },
    map,
    title: "Town Center!",
  });

  new google.maps.Marker({
    position: { lat: 42.049187, lng: -87.672943 },
    map,
    title: "Big Park!",
  });
}

window.initMap = initMap;
