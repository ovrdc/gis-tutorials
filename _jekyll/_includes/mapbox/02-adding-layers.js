/*Wait for the initial style to load*/
map.on('style.load', function() {
  map.addSource('counties', {
    'type': 'geojson',
    /*many types of data can be added, such as geojson, vector tiles or raster data*/
    'data': '{{site.baseurl}}/tutorial-data/counties.geojson'
  });
  /*here we are adding a source, then a layer based on that that source*/
  map.addLayer({
    'id': 'countiesLayer',
    'type': 'fill',
    /*define the type of layer fill, line, point, fill-extrusion, background, raster, circle*/
    'source': 'counties',
    'layout': {
      'visibility': 'visible'
    },
    /*there are many options for styling - this is a simple style*/
    'paint': {
      'fill-color': 'skyblue',
      'fill-outline-color': 'white',
      'fill-opacity': 0.9
    }
  });
});
