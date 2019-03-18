// var time = 0;

// var timer = setInterval(function(){
//   time += 2;
//   console.log(time + ' seconds have passed')
//   if (time > 5){
//     clearInterval(timer)
//   }



// }, 2000)

// console.log(__dirname);
// console.log(__filename)
// normal function statement
// function sayHi() {
//   console.log('hi')
// }
// sayHi()

// var sayBye = function(){
//   console.log('bye')
// }


// function callFunction(fun){
//   fun()
// }

// callFunction(sayBye)
// var stuff = require('./stuff')
// var events = require('events')
// var util = require('util')
// var fs = require('fs')

// console.log(stuff.counter(['shaun', 'crystal', 'ryu']))
// console.log(stuff.adder(5,6))
// console.log(stuff.adder(stuff.pi, 5))

// // var myEmitter = new events.EventEmitter();
// // console.log(myEmitter)

// // myEmitter.on('someEvent', function(mssg){
// //   console.log(mssg)

// // })

// // myEmitter.emit('someEvent', 'the event was emitted')

// var Person = function(name, lastName){
//   this.name = name;
//   this.lastName = lastName
// }

// util.inherits(Person, events.EventEmitter);

// var emmanuel = new Person('emmanuel', 40)
// var james = new Person('james')
// var mary = new Person('mary')

// var people = [james, mary, emmanuel]

// people.forEach(function(person){
//   person.on('speak',function(mssg){
//     console.log(person.name + ' said ' + mssg)
//   })
// })

// james.emit('speak', 'hey dudes')
// emmanuel.emit('speak', 'I want to run')

// fs.readFile('readme.md', 'utf8', function(err, data){
//   console.log(data)

// })
// // fs.writeFileSync('writeMe.txt', readMe)
// console.log('test')
// var http = require('http')


// var fs = require('fs')


// myReadStream.on('data', function(chunk){
//   console.log('new chunk received:');
//   myWriteStream.write(chunk)

//   })



// var server = http.createServer(function(req, res){
//   console.log('request was made' + req.url)
//   if(req.url === '/home' || req.url === '/'){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/index.html').pipe(res)
//   } else if(req.url === '/contact'){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/contact.html').pipe(res)

//   } else if(req.url === '/api/ninjas'){
//     var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age:32}];
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(ninjas))
//   } else {
//     res.writeHead(404, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(res)

//   }
//   // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')

//   // myReadStream.pipe(res)

// })

// server.listen(3000, '127.0.0.1')
// console.log("yo dawgs, now listeining to port 3000")
// returns the express module(object) via modules.export
var express = require('express');
// fires the express function inside that function there are props and methods accessible to us
var app = express()


app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html')
})
// route paramaters/variables such as :id query the database to retrieve and add data to the view
app.get('/profile/:name', function(req, res){
  var data = {age: 29, job: 'ninja'}
  res.render('profile', {person: req.params.name, data: data});
})

app.listen(3000)



















