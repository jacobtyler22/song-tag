var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var artistCtrl = require('./lib/controllers/artistCtrl.js');
var songCtrl = require('./lib/controllers/songCtrl.js');
var tagCtrl = require('./lib/controllers/tagCtrl.js');

var app = express();
var mongoUri = "mongodb://localhost:27017/song-tag";

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to database at ' + mongoUri);
});

app.use(bodyParser.json());

app.post('/artist', artistCtrl.post);
app.post('/song', songCtrl.post);
app.post('/tag', tagCtrl.post);
app.get('/artist', artistCtrl.get);
app.get('/song', songCtrl.get);
app.get('/tag', tagCtrl.get);

app.listen(8000, function(){
	console.log('Listening on port 8000');
});