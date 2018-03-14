var url = "{{site.baseurl}}/tutorial-data/counties.topojson";

var counties = L.geoJson(null, {
  style: function(feature) {
    switch (feature.properties.winner) {
      case "Trump":
        return {
          fillColor: "red",
          fillOpacity: 0.4,
          color: 'white',
          weight: 1
        }
      default:
        return {
          fillColor: "blue",
          fillOpacity: 0.4,
          color: 'white',
          weight: 1
        }
    }
  },
  onEachFeature: function(feature, county) {
    var info = county.feature.properties.NAME +
      "<" + "br" + ">" + county.feature.properties.winner;
    county.bindPopup(info);
  }
}).addTo(map);

layerControl.addOverlay(counties, "Counties");

var cData = omnivore.topojson(url, null, counties);

var countyPoints = L.geoJson(null, {
  pane: 'makerPane'
}).addTo(map);
layerControl.addOverlay(countyPoints, "Winner Percentage * Population")
var x = 0;
var r = 1;
var v = 1;
var c = 'gray';
var o = 0.7;
cData.on('ready', function(data) {
  counties.eachLayer(function(layer) {
    var center = turf.centerOfMass(layer.toGeoJSON());
    if (x == 0) {console.log(center);}
    x = 1;
    if (layer.feature.properties.winner == 'Trump') {
      v = ((layer.feature.properties.POPULATION) * (layer.feature.properties["per_gop"]));
      r = v/60000;
      c = 'red';
      o = layer.feature.properties["per_gop"]
    }
    if (layer.feature.properties.winner == 'Hillary') {
      v = ((layer.feature.properties.POPULATION) * (layer.feature.properties["per_dem"]));
      r = v/60000;
      c = 'blue';
      o = layer.feature.properties["per_dem"]
    }
    if (r < 1 ) {r = 1}
    var marker = L.circleMarker([center.geometry.coordinates[1],center.geometry.coordinates[0]], {radius: r, opacity: o, fillOpacity: o, color: c, fillColor: c});
    marker.bindPopup('County Population * Percent of Winner Vote: ' + v.toFixed(0));
    countyPoints.addLayer(marker);
  })
});
