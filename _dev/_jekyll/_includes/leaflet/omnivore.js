var url = "{{site.baseurl}}/tutorial-data/counties.topojson";

var counties = L.geoJson().addTo(map);

/*can put html inside here, this is one way you could add a legend*/
layerControl.addOverlay(counties, "Counties");

var cData = omnivore.topojson(url, null, counties);
