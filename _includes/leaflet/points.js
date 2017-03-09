var url2= "{{site.baseurl}}/map-data/airports.geojson"

var aStyle= {
    color: "black",
    radius: 5,
    weight: 0,
    fillOpacity: 1,
    pane: "markerPane" };

var airports = L.geoJson(null, {
    pointToLayer: function(feature, latlng) {
	return L.circleMarker(latlng, aStyle)
    }
}).addTo(map);

var aData= omnivore.geojson(url2, null, airports);
