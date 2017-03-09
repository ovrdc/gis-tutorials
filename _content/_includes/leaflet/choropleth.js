// Choropleth

cData.on("ready", function() {
	map.removeLayer(counties);
	choropleth = L.choropleth(cData.toGeoJSON(), {
		valueProperty: "POP_SQMI", // which property in the features to use
		scale: ["white","#006d2c"], // chroma.js scale - include as many as you like
		steps: 7, // number of breaks or steps in range
		mode: "q", // q for quantile, e for equidistant, k for k-means
		style: {
			color: "#fff", // border color
			weight: 1,
			fillOpacity: 0.9
		},
		onEachFeature: function(feature, layer) {
			layer.bindTooltip(feature.properties.NAME + '<' + 'br' + '>' + + feature.properties.POPULATION)
		}
	}).addTo(map);
	layerControl.addOverlay(choropleth, "Choropleth");
});
