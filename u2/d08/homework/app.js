var express = require("express");
var app = express();
var mustache = require("mustache-express");
var pgp = require("pg-promise")();
var db = pgp("postgres://emmanuelpaulino@localhost:5432/hogwarts_crud"); //the database I am talking to in psql AKA intialized a database connection using the 'pg-promise package'??

app.engine("html", mustache());

app.set("view engine", "html");//handler to connect the route to view
app.set("views", __dirname + "/views");
app.use("/", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("home/index");//goes into the home folder and gets the index file to display
});

app.get("/students", function(req, res) {
  db.any("SELECT * FROM students").then(function(data) {
    res.render('students/index', {students: data});
  }).catch(function(error){
    console.log("ERROR", error);
    res.render("index");
  })
});

app.get("/students/:id", function(req, res){
  db.one("SElECT * FROM students WHERE id = $1", [req.params.id])
    .then(function(data){
      res.render('students/show', data);
    });
});

//JSON ALTERNATIVE
// function getSinglestudent(req, res, next) {
//   var studentID = parseInt(req.params.id);
//   db.one('select * from students where id = $1', studentID)
//     .then(function (data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved ONE student'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

app.get("/houses", function(req, res){
  db.any("SELECT * FROM houses").then(function(data) {
    res.render('houses/index', {houses: data});
  }).catch(function(error){
    console.log("ERROR", error);
    res.render("index");
  })

  });

app.get('/houses/:id', function(req,res){
  db.many('SELECT students.fname, lname, image, house_id, houses.id, name, img_url from students JOIN houses ON students.house_id = houses.id WHERE students.house_id = $1', [req.params.id]).then(function(data){
    var housesId = data
    res.render('houses/show', {houses: housesId});
  });
});






app.listen(3000, function() {
  console.log("listening on 3000");
});


