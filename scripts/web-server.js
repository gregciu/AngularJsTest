var express = require('express');
var path = require('path');
var greetingData = require('./greetingDataController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));

app.get('/data/:id', greetingData.get);
app.get('/data', greetingData.getAll);
app.post('/data/:id', greetingData.save);
app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });

app.listen(9996);
console.log('Listening on port ' + 9996 + '...');