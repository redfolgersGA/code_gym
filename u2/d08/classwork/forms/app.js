//require all your dependencies here
var exp = require('express');
var mstE = require('mustahce-express'),
var bdPars = require('body-parser'), //body parser
var methodOverride = require('method-override'), //method override
var pgp = require('pg-promise')(),
var db = pgp('postgress://emmanuelpaulino@localhost:5432/forms')
var app = exp();

//configure express and related packages
app.engine('html', mstE());
app.set('view engine','html');
app.set('views',__dirname + '/views);
app.use('/', exp.static(__dirname + '/public'));



app.listen(3000, function(){
  console.log('alive on 3k');
});
