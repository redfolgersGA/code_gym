var express = require('express');
var app = express();

app.listen(3000, function() {
  console.log('listening on 3000');
})

var pgp = require('pg-promise')();
var db = pgp('postgress://emmanuelpaulino@localhost:3000/homework')
var mustache = require('mustache')



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/static.css')
// })

app.get('/buildings', function (req, res) {
  db.many("SELECT * FROM buildings").then(function(data){
    res.render('buildings/index', {buildings: data});
  }).catch(function(error){
    console.log("ERROR", error);
    res.render("index");
  })
});
  req.send('buildings')
  console.log('Accessing all buildings')

})

app
