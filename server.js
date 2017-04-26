// requires
var express = require( 'express' );
var bodyParser = require('body-parser');
var path = require('path');
var calcU = require( './calcMod' );

var app = express();
var port = 9876;

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calc', function(req, res) {
  console.log('in /calc POST');

  var respObj = { answer: calcU(req.body) };

  res.send( respObj );
  res.send( 200 );
});

// listen
app.listen(port, function() {
  console.log('listening on port ', 9876);
});
