var http = require("http");
var fs = require("fs");



var getHTML = function(res){
  res.writeHead(200,{"Content-type": "text/html"});
  var html = fs.readFileSync(__dirname + "/public/index.html");
  res.end(html);

}

var getCSS = function(res){
  res.writeHead(200, {"Content-type": "text/css"});
  var css = fs.readFileSync(__dirname + "/public/style.css");
  res.end(css);
}

var server = http.createServer(function(req, res){
  if (req.url === "/style.css") {
    getCSS(res);
  } else if (req.url === "/") {

  }
});

var port = 3000;
server.listen(port);
console.log("Yas! listening on port ", port);
