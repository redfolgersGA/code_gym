const express = require('express');
const app = express();
const pgp = require('pg-promise')();//talk to your database
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");//grab stuff out of forms
const session = require('express-session');//a fancy cookie that allows the website to remember you cookie with fancy security features

/* BCrypt stuff here */
const bcrypt = require('bcrypt');

app.engine('html', mustacheExpress());//tells the app what we are configuring
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({//sessions configuration
  secret: 'theTruthIsOutThere51',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

var db = pgp('postgres://emmanuelpaulino@localhost:5432/auth_xfiles');

app.get("/", function(req, res){
  var logged_in;
  var email;

  if(req.session.user){
    "logged_in" = true,
    "email": email
  }

    var data = {
      "logged_in": false,
      "email": "whatever@website.com"
    }
  res.render('index', data);
})

app.get("/signup", function(req, res){//talks to views
  res.render('signup/index')
});

app.post('/signup', function(req, res){//inserts a new user to the database POST!!!
  //save user to the database WE NEED TO MAKE ONE NOW
  var data = req.body; //body parser used here
//bcrpt takes two arguments password and amount of times going through
  bcrypt.hash(data.password, 10, function(err, hash){
  db.none(
    "INSERT INTO users (email, password_digest) VALUES ($1, $2)",
          [data.email, hash]
      ).then(function(){
        res.send('User Created!');
      })
});
})

//use db.none-->simpy gettting something into the database and getting nothing out
//hash passwords will always have the same length the thing that
//comes out on the otherside always has the same length regardless of the length of your password

app.post('/login', function(req, res){
  var data = req.body; //body parser

  db.one(//one user out of the database
      "SELECT * FROM users WHERE email =$1",
      [data.email]
    ).catch(function(){
      res.send('Email/Password not found.')
    }).then(function(user){
      bcrypt.compare(data.password, user.password_digest, function(err, cmp){
        if(cmp){
          req.session.user = user;
          res.redirect('/')
        } else {
          res.send('Email/password not found/')
        }
      }

    });
});
  });
    //data.password what the user puts in and user.password_digest is gotten from the sql query db.one





















app.listen(3000, function () {
  console.log('X-files Auth App: listening on port 3000!');
});
