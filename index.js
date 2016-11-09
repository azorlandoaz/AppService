console.log('Servidor UAO Movil Padre');

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path    = require("path");

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.use(express.static('Public'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/Public/Views/Login.html'));
});*/

/*var service = require('./service.js');

app.get('/prueba',service.create);*/

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/Public/Views/Login.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
console.log("Servidor activo por el puerto " + port);
