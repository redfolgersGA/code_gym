var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.listen(port)

console.log('Server started on ' + port);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('index')
});


app.get('/api/npmPackages', function(req, res){
  var json_data = npmPackages;
  res.json(json_data)
});

