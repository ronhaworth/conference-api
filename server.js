// Import the Modules installed to our server
var express    = require('express');
var bodyParser = require('body-parser');

// Start the Express web framework
var app        = express();

// configure app
app.use(bodyParser());

// where the application will run
var port     = process.env.PORT || 8080;

// Import Mongoose
var mongoose   = require('mongoose');

// connect to our database
// you can use your own MongoDB installation at: mongodb://127.0.0.1/databasename
mongoose.connect('mongodb://username:password@kahana.mongohq.com:10073/node-api');

// Start the Node Server
app.listen(port);
console.log('Magic happens on port ' + port);