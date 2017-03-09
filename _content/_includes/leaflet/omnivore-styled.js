var url = "{{site.baseurl}}/map-data/counties.topojson";

var counties = L.geoJson(null, {
  style: function(feature) {
    switch (feature.properties.winner) {
      case "Trump":
        return {
          fillColor: "red"
        }
      default:
        return {
          fillColor: "blue"
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
