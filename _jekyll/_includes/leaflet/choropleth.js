// Choropleth

cData.on("ready", function() {
  map.removeLayer(counties);
  choropleth = L.choropleth(cData.toGeoJSON(), {
    filter: function(feature) {
      if (feature.properties.state == 39) {
        return true
      }
    },
    valueProperty: "POP_SQMI", // which property in the features to use
    scale: ["white", "#006d2c"], // chroma.js scale - include as many as you like
    steps: 7, // number of breaks or steps in range
    mode: "q", // q for quantile, e for equidistant, k for k-means
    style: {
      color: "#fff", // border color
      weight: 1,
      fillOpacity: 0.9
    },
    onEachFeature: function(feature, layer) {
      layer.bindTooltip(feature.properties.NAME + '<' + 'br' + '>' + +feature.properties.POPULATION)
    }
  }).addTo(map);

  layerControl.addOverlay(choropleth, "Choropleth");

  /*Legend Custom Leaflet Control*/
  var legend = L.control({ position: 'bottomright' });
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend')
    var colors = choropleth.options.colors
    var labels = []

    /* Add min & max*/
    div.innerHTML = '<div><h3 style="font-weight:bolder;font-size:larger;">Population Density</h3><br></div><div class="labels"><div class="min">Low</div> \
  <div class="max">High</div></div>'

  for (i = 1; i < colors.length; i++) {
      labels.push('<li style="background-color: ' + colors[i] + '"></li>')
    }

    div.innerHTML += '<ul style="list-style-type:none;display:flex">' + labels.join('') + '</ul>'
    return div
  }

  legend.addTo(map);
});
