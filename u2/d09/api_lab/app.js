var express = require('express');
var app = express();
var pgp = require('pg-promise')();
var db = pgp("postgres://emmanuelpaulino@localhost:5432/plan_zoology");
var mustache = require('mustache-express');
var methodOverride = require('method-override');
var bdPars = require('body-parser');

app.listen(3000, function(){
  console.log('Server alive on port 3000!');
});

app.engine("html", mustache());

app.set("view engine", "html");//handler to connect the route to view
app.set("views", __dirname + "/views");
app.use("/", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("home/index");//goes into the home folder and gets the index file to display
});

app.get("/species", function(req, res) {
  db.any("SELECT species FROM creatures").then(function(data) {
    res.render('species/index', {creatures: data});
  }).catch(function(error){
    console.log("ERROR", error);
    res.render("index");
  })
});

app.get("/planets", function(req, res) {
  db.any("SELECT species, planet FROM creatures").then(function(data){
    res.render("planets/index", {creatures: data});
  }).catch(function(error){
    console.log("ERROR", error);
    res.render("index");
  })
});

app.post("/species", function(req, res) {
  db.any("UPDATE creatures")
})















