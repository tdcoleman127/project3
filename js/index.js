function initMap() {
  const myLatLng = { lat: 42.058966920218346, lng: -87.74932121056031 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "I've never been to this mall, but I want to know!",
  });
}

window.initMap = initMap;
