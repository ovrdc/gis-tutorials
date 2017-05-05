var x = 0;
var y = 0;
var z = 0;
var v2;

map.on('dataloading', function() {
  y = y + 1;
});
map.on('sourcedataloading', function() {
  x = x + 1;
  if (z == 1) {
    //myVar = setInterval(logData, 100);
  }
});

function logData() {
  console.log(x, y);
  y = y + 1;
  v2 = setTimeout(checkData, 1000);
};

var myVar = setInterval(logData, 100);

function checkData() {
  if ((y == x) || (x > y)) {
    clearTimeout(v2)
    z = 0;
    return false
  }
  if (y > x) {
    console.log(true);
    z = 1;
    clearInterval(myVar);
    clearInterval(v2);
  }
}
map.on('sourcedataloading', function() {
  console.log('sourcedataloading')
});

map.on('dataloading', function() {
  console.log('dataloading')
});
