/*Query with Popup and tooltip example*/

var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

function identifyFeatures(location, layer, fields) {
  var identifiedFeatures = map.queryRenderedFeatures(location.point, layer);
  /*console.log(identifiedFeatures);*/
  popup.remove();
  if (identifiedFeatures != '') {
    var popupText = "";
    for (i = 0; i < fields.length; i++) {
      popupText += "<strong>" + fields[i] + ":</strong> " + identifiedFeatures[0].properties[fields[i]] + "<" + "br" + ">"
    };
    popup.setLngLat(location.lngLat)
      .setHTML(popupText)
      .addTo(map);
  }
}

map.on('click', function(e) {
  identifyFeatures(e, 'countiesLayer', ["NAME", "POPULATION", "POP_SQMI"])
});

map.on('mousemove', function(e) {
  identifyFeatures(e, 'countiesLayer', ["NAME", "POPULATION", "POP_SQMI"])
});

/*End popup and tooltip example*/
