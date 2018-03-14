var url2 = "{{site.baseurl}}/tutorial-data/airports.geojson"

var airportStyle = {
  color: "black",
  radius: 5,
  weight: 0,
  fillOpacity: 1,
  pane: "markerPane"
};

var airports = L.geoJson(null, {
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, airportStyle)
  },
  onEachFeature: function(feature, airport) {
    airport.bindPopup(feature.properties.NAME)
  }
}).addTo(map);

var aData = omnivore.geojson(url2, null, airports);
