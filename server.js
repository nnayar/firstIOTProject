var listenport = 3000;   											//TCP listening port

var express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	random = require('randgen')
	stochastic = require('stochastic');
	
// var provisioningTool = require('./controller/controller.js');

// app.use(logger('combined'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.set('view engine', 'ejs');

// Define App routes

//Hello World
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Need to update this
// app.get('/analyse', provisioningTool.readValidateOrg);
// 
// For receiving data from 
// app.put();
// 
// app.get('/dashboard', provisioningTool.displayNetworks);

app.listen(listenport, function(err) {
	if (err) return console.log(err);
	console.log("Meraki presence API receiver listening on port " + listenport);
});
