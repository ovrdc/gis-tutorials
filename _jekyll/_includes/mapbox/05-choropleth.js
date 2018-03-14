/*Choropleth and Extrusion Example*/

var mapdiv = document.getElementById('map');
var button = document.createElement("div");
button.setAttribute("id", "extrude");
button.setAttribute("class", "mapboxgl-ctrl-group");
button.innerHTML = "3D";
mapdiv.appendChild(button);

var view2 = {
  center: [-80.6, 39.1],
  zoom: 5,
  bearing: -18.1,
  pitch: 60,
  speed: 0.2,
  curve: 0.7
};
var view1 = {
  center: [-95.52, 39.94],
  zoom: 4,
  bearing: 0,
  pitch: 0,
  speed: 0.5,
  curve: 0.5
};

map.on('style.load', function() {
  map.flyTo(view1);
  map.addSource('counties', {
    'type': 'geojson',
    'data': '{{site.baseurl}}/tutorial-data/counties.geojson'
  });
  map.addLayer({
    'id': 'countiesLayer',
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

  /* this would be different for mapbox styles*/

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
  }); /* this would be different for mapbox styles*/

  var ex = document.getElementById('extrude');
  ex.addEventListener('click', function() {
    if ((map.getLayoutProperty('countiesLayer', 'visibility')) === 'visible') {
      map.setLayoutProperty('popsqmi', 'visibility', 'visible');
      ex.className = 'mapboxgl-ctrl-group active';
      setTimeout(function() {
        map.flyTo(view2);
        map.setLayoutProperty('countiesLayer', 'visibility', 'none');
      }, 2000);
    } else {
      map.setLayoutProperty('countiesLayer', 'visibility', 'visible');
      map.setLayoutProperty('popsqmi', 'visibility', 'none');
      ex.className = 'mapboxgl-ctrl-group';
      map.flyTo(view1);
    }
  });

});

/*End Choropleth Example*/
