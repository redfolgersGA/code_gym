
var express = require('express');
// fires the express function inside that function there are props and methods accessible to us
var app = express()
var $ = require('jquery');
var pokemonApp = require('./pokemon')


var pokemon = [
   ['Voltorb','./assets/images/voltorb.png',100],
   ['Charizard','./assets/images/charizard.png',200],
   ['Gyarados','./assets/images/gyarados.png',125],
   ['Mew','./assets/images/mew.png',75],
   ['Geodude','./assets/images/geodude.png',90],
   ['Snorlax','./assets/images/snorlax.png',110],
   ['Kabutops','./assets/images/kabutops.png',95],
   ['Eevee','./assets/images/eevee.png',60],
   ['Beedrill','./assets/images/beedrill.png',70],
   ['Magikarp','./assets/images/magikarp.gif',40],
   ['Gastly','./assets/images/gastly.png',50]
 ];




app.set('view engine', 'ejs');
// static files CSS
app.use('/assets', express.static('assets'))





app.get('/', function(req, res){
  res.render('pokemon')

});

app.get('/contact', function(req, res){

  res.render('contact', {qs: req.query})
})
// route paramaters/variables such as :id query the database to retrieve and add data to the view
app.get('/profile/:name', function(req, res){
  var data = {age: 29, job: 'ninja', hobbies:['eating', 'fighting', 'fishing']}
  res.render('profile', {person: req.params.name, data: data});
})


// start the server
app.listen(3000)



















