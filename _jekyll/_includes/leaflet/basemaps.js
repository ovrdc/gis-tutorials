/*Easily add basemaps or baselayers with L.tileLayer wms layers can also be added with L.tileLayer.wms */

var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
}).addTo(map);

layerControl.addBaseLayer(OpenStreetMap_HOT, "Streets");
