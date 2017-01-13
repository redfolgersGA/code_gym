var express = require('express');
var app = express();
var mustache = require('mustache-express');
var pgp = require('pg-promise')();
var db = pgp("postgres:tajenglish@localhost:5432/hogwarts_crud");

app.listen(3000, function(){
  console.log('Server alive on port 3000!');
});

app.set('view engine','html');
app.use(express.static(__dirname+'/public'));
app.set('views',__dirname+'/views');
app.engine('html',mustache());

app.get('/',function(req,res){
  res.render('home/index');
});

app.get('/students',function(req,res){
db.many('SELECT * FROM students').then(function(data){
  var allStudents = {'students':data};
  res.render('students/index', allStudents);

  });
});

app.get('/students/:id',function(req,res){
db.one('SELECT * FROM students WHERE id = $1', [req.params.id]).then(function(data){
  var allStudents = {'student':data};
  res.render('students/show', allStudents);

  });
});

app.get('/houses/',function(req,res){
db.many('SELECT * FROM houses').then(function(data){
  var cribs = {'houses':data};
  res.render('houses/index', cribs);

  });
});
app.get('/houses/:id', function(req, res){
  db.many('SELECT * FROM houses JOIN students ON students.house_id=houses.id WHERE houses.id=$1',[req.params.id]).then(function(data){
  var stuff = {
    'house':data[0],
    'students':data
};
  // res.send(data);
  res.render('houses/show', stuff);
  });
});
