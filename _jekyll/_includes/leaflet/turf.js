var airportJson;

aData.on('ready', function() {
    aData.toGeoJSON();
    airportJson = aData.toGeoJSON();
});

var highlightStyle = {
    color: "goldenrod",
    fillColor: "goldenrod",
    opacity: 1,
    fillOpacity: 1,
    pane: "markerPane"
}

var highlight = new L.geoJson(null, {
    pointToLayer: function(feature, latlng) {
	return new L.circleMarker(latlng, highlightStyle)
    }
}).addTo(map);

counties.on("mouseover", function(e) {
    highlight.clearLayers();
    var selLayer = new L.geoJson(e.layer.toGeoJSON());
    var within = turf.within(airportJson, selLayer.toGeoJSON());
    highlight.addData(within);
});
