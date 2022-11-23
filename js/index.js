function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.029070294972136, lng: -87.73009732985915 },
    zoom: 11,
  });
}

window.initMap = initMap;

function initMap() {
  const myLatLng = { lat: 42.058966920218346, lng: -87.74932121056031 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
