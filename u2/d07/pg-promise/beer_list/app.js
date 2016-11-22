/* An app will go here */
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var pgp = require("pg-promise")();
var db = pgp("postgres://emmanuelpaulino@localhost:5432/beer_list")

var mustacheExpress = require('mustache-express');//require in order to use it as a template
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set("views", express.static(__dirname + "/public"));

app.listen(port)
console.log("Server started on " + port);
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  db.many("SELECT * FROM beers").then(function(data) {
    var beer_data = {
      ttiel: "X-Files Menu",
      beers: data
    };
    console.log(beer_data);
    res.render('index', beer_data);
  });
  console.log("hit get route");
  res.send('index');
});

app.get("/beers", function(req, res) {
  console.log('hit beers route');
  db.many("SELECT * FROM beers").then(function(data) {
    console.log(data);
    var json_data = {beers: data}
    res.json(data);
  });
});

app.get("/beers/:id", function(req, res) {
  console.log('hit the beer id route');
  db.one("SELECT * FROM beers WHERE id = $1", [req.params.id])
    .then(function(data) {
      console.log(data);
      res.json(data);
    });

});
app.post("/beer/:name/:category/:country/:alcohol/:price", function(req, res) {
  console.log(req.params);
  db.none("INSERT INTO beers (name, category, country, alcohol, price")
  VALUES ($1, $2, $3, $4, $5)",
    [req.params.name, req.params.categorym req.params.country, req.params.alcohol,
    req.params.price].then(function() {
      res.send("ok");
    }).catch(function(error) {
      res.send(error);
    })
});
// set up an api route for get "/beers'

// set up an api route for get "/beers/:id"



