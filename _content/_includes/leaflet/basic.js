var map = L.map("map");

map.setView([40.3,-96.6], 5);

L.hash(map);

L.control.scale().addTo(map);

var layerControl = new L.control.layers(null, null).addTo(map);
