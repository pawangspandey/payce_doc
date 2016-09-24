var express = require('express');
var app = new express();
var path  = require('path');
var router = express.Router();
app.use('/', router);
app.use('/css',express.static(path.join(__dirname + '/doc/css')));
app.use('/img',express.static(path.join(__dirname + '/doc/img')));
app.use('/locales',express.static(path.join(__dirname + '/doc/locales')));
app.use('/utils',express.static(path.join(__dirname + '/doc/utils')));
app.use('/vendor',express.static(path.join(__dirname + '/doc/vendor')));
app.use('/api_data.js',express.static(path.join(__dirname + '/doc/api_data.js')));
app.use('/api_data.js',express.static(path.join(__dirname + '/doc/api_data.json')));
app.use('/api_project.js',express.static(path.join(__dirname + '/doc/api_project.js')));
app.use('/api_project.json',express.static(path.join(__dirname + '/doc/api_project.json')));
app.use('/main.js',express.static(path.join(__dirname + '/doc/main.js')));
app.get('/', function(req, res) {
  var username = req.query.username, password = req.query.password;
  if(username == "pawan@fourzip.com" && password == "testpassword"){
    res.sendFile(path.join(__dirname+'/doc/index.html'));
  }else{
    res.status(401).send({
      data:[],
      errors:["unauthorized access"],
      errorFor:{}
    });
  }
});
app.listen(3000, function() {
  console.log("port acepted on 3000");
});
