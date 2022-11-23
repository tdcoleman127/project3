function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.029070294972136, lng: -87.73009732985915 },
    zoom: 15,
  });

  new google.maps.Marker({
    position: { lat: 42.058890, lng: -87.749071 },
    map,
    title: "Hello World!",
  });
}

{ lat: 42.058890, lng: -87.749071 }

window.initMap = initMap;
