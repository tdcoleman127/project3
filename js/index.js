function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.058890, lng: -87.749071 },
    zoom: 12,
  });

  var mallMarker = new google.maps.Marker({
    position: { lat: 42.058890, lng: -87.749071 },
    map,
    title: "Mall!",
  });
  
  var townMarker = new google.maps.Marker({
    position: { lat: 42.009895, lng: -87.713161 },
    map,
    title: "Town Center!",
  });

  var parkMarker = new google.maps.Marker({
    position: { lat: 42.049187, lng: -87.672943 },
    map,
    title: "Big Park!",
  });
  
  
  
  /*Markers*/
  var infowindow = new google.maps.InfoWindow({
    content: "This is the Old Orchard Mall!! XOXOLOLLMAOGG"
  });
  
  infowindow.open(map, mallMarker);
  
  var clicks = 0;
  mallMarker.addListener("click", () => {
    if (clicks == 0) {
      infowindow.close();
      clicks = clicks + 1;
    } else {
      infowindow.open(map, mallMarker);
      clicks = 0;
    }
  });

  var infowindowTwo = new google.maps.InfoWindow({
    content: "This is the Lincolnwood Town Center!! XOXOLOLLMAOGG I went here when I was little, a very good mini mall!"
  });
  
  infowindowTwo.open(map, mallMarker);
  
  var clicks = 0;
  townMarker.addListener("click", () => {
    if (clicks == 0) {
      infowindowTwo.close();
      clicks = clicks + 1;
    } else {
      infowindowTwo.open(map, townMarker);
      clicks = 0;
    }
  });
  
}

window.initMap = initMap;
