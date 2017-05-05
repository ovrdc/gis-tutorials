var mapdiv = document.getElementById('map');
var button = document.createElement("div", "extrude");
button.setAttribute("id", "extrude");
button.innerHTML = "3D";
mapdiv.appendChild(button);

var view2 = {center: [-80.6,39.1], zoom: 5, bearing: -18.1, pitch: 60, speed: 0.2, curve: 0.7};
var view1 = {center: [-95.52, 39.94], zoom: 4, bearing: 0, pitch: 0, speed: 0.5, curve: 0.5};
var map = new mapboxgl.Map({
  container: 'map',
  hash: true,
  /*style: 'https://www.ovrdc.org/apps/assets/mapboxgl/openmaptiles/osm-bright/style.json',*/
  style: '{{site.baseurl}}/tutorial-data/blank.json',
  center: [-95.52, 39.94],
  zoom: 4,
  debug: 1
});

map.addControl(new mapboxgl.NavigationControl());

map.on('style.load', function() {
  map.flyTo(view1);
  map.addSource('counties', {
    'type': 'geojson',
    'data': '{{site.baseurl}}/tutorial-data/counties.geojson'
  });
  map.addLayer({
    'id': 'president',
    'type': 'fill',
    'source': 'counties',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': {
        'property': 'popsqmi',
        'stops': [
          [1, 'white'],
          [25, 'orange'],
          [1000, 'firebrick']
        ]
      },
      'fill-outline-color': 'white',
      'fill-opacity': 0.9
    }
  });

  // this would be different for mapbox styles
  map.addLayer({
    'id': 'popsqmi',
    'type': 'fill-extrusion',
    'source': 'counties',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'fill-extrusion-color': {
        'property': 'popsqmi',
        'stops': [
          [1, 'white'],
          [25, 'orange'],
          [1000, 'firebrick']
        ]
      },
      'fill-extrusion-height': {
        "property": 'popsqmi',
        "stops": [
          [1, 0],
          [25, 1000],
          [1000, 65535]
        ]
      },
      'fill-extrusion-opacity': 0.9,
      'fill-extrusion-base': 0
    }
  }); // this would be different for mapbox styles

  var ex = document.getElementById('extrude');
  ex.addEventListener('click', function() {
    if ( (map.getLayoutProperty('president', 'visibility')) === 'visible') {
      map.setLayoutProperty('popsqmi', 'visibility', 'visible');
      ex.className = 'active';
      setTimeout(function() {
        map.flyTo(view2);
        map.setLayoutProperty('president', 'visibility', 'none');
      }, 2000);
    }else{
      map.setLayoutProperty('president', 'visibility', 'visible');
      map.setLayoutProperty('popsqmi', 'visibility', 'none');
      ex.className = '';
      map.flyTo(view1);
    }
  });

});
