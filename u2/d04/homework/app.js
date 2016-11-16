var http = require("http");
var fs = require("fs");

var port = 8080;
server.listen(port);
console.log("listening on port ", port);

var getHTML = function(res){
  res.writeHead(200,{"Content-type": "text/html"});
  var html = fs.readFileSync(__dirname + "/public/index.html");
  res.end(html);

}


