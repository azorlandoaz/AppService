console.log('Servidor UAO Movil Padre');

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path    = require("path");

var app = express();
var port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.use(express.static('Public'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/Public/Views/Login.html'));
});*/

var service = require('./service.js');

app.get('/prueba',service.create);

http.createServer(app).listen(port);
console.log("Servidor activo por el puerto " + port);
