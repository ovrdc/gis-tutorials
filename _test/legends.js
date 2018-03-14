var colors = [];
var values = [];

function inArray(target, array)
{
  for(var i = 0; i < array.length; i++) 
  {
    if(array[i] === target)
    {
      return true;
    }
  }
  return false; 
}

cData.on('ready', function() {

	counties.eachLayer(function(county) {
		var f = county.feature.properties.winner;
		var c = county.options.color;
		if (inArray(f, values) != true) {
			values.push(f);
		}
		if (inArray(c, colors) != true) {
			colors.push(c);
		}
	});
	console.log(colors);
	console.log(values);
});
