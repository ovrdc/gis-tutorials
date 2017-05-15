var map = new mapboxgl.Map({
  container: 'map',
  hash: true,
  /*style: 'some mapbox style url*/
  /*below is a blank style*/
  style: {
    "version": 8,
    "name": "blank",
    "sources": {
      "openmaptiles": {
        "type": "vector",
        "url": ""
      }
    },
    "layers": [{
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#1d1f20"
      }
    }]
  },
  center: [-95.52, 39.94],
  zoom: 4,
  debug: 1
});
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl()); /*not working correctly with this layout */
