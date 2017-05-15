map.on('click', function(e) {
  var clickedFeatures = map.queryRenderedFeatures(e.point, 'countiesLayer');
  if (clickedFeatures != '') {
    var popup = new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(clickedFeatures[0].properties.NAME)
      .addTo(map);
  }
});
