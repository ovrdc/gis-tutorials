// Search

cData.on("ready", function() {

	var searchControl = new L.Control.Search({
		layer: counties,
		propertyName: 'NAME',
	}).addTo(map);

});
