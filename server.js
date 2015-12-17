var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

require('./config/mongoose.js');
require('./config/routes.js')(app);


app.listen(8000, function(){
	console.log('listening on port 8000!');
})