var url = "{{site.baseurl}}/tutorial-data/counties.topojson";

var counties = L.geoJson(null, {
  filter: function(feature) {
    if (feature.properties.state == 39) {
      return true
    }
  },
  style: function(feature) {
    switch (feature.properties.winner) {
      case "Trump":
        return {
          fillColor: "red",
          color: 'white',
          fillOpacity: 0.7
        }
      default:
        return {
          fillColor: "blue",
          color: 'white',
          fillOpacity: 0.7
        }
    }
  },
  onEachFeature: function(feature, county) {
    var info = county.feature.properties.NAME +
      '<' + 'br' + '>' + county.feature.properties.winner;
    county.bindPopup(info);
  }
});

/*can put html inside here, this is one way you could add a legend*/
layerControl.addOverlay(counties, "Counties");

var cData = omnivore.topojson(url, null, counties);

cData.on('ready', function() {
  map.fitBounds(counties.getBounds())
});
