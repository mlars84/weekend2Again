// requires
var express = require( 'express' );
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 9876;
var calc = require('/calcMod');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// base url hit
app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

app.post('/calc', function(req, res) {
  console.log('in /calc POST');

  var respObj = { answer: calc(req.body) };

  res.send( respObj );
  res.send( 200 );
});

// listen
app.listen(port, function() {
  console.log('listening on port ', 9876);
});
