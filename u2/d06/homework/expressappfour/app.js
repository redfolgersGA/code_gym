var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.listen(port);
console.log('Server started on ' + port);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('index');
});

var npmPackages =
{
  title: "Popular NPM Frameworks",
  text: "These are the most popular frameworks",

  packages: [
  {
    name: "Express",
    category: "Server-side Framework",

  },
  {

  }


  ]
}
