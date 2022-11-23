function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.029070294972136, lng: -87.73009732985915 },
    zoom: 11,
  });
  
  const myLatLng = { lat: 42.05890269684054, lng: -87.74947443175276 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "I've never been to this mall, but I want to go!",
  });
}

window.initMap = initMap;
