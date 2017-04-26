// requires
var express = require( 'express' );
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 9876;

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function() {
  console.log('listening on port ', 9876);
});
