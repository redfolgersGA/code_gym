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
var stuff = require('./stuff')
var events = require('events')
var util = require('util')
var fs = require('fs')

console.log(stuff.counter(['shaun', 'crystal', 'ryu']))
console.log(stuff.adder(5,6))
console.log(stuff.adder(stuff.pi, 5))

// var myEmitter = new events.EventEmitter();
// console.log(myEmitter)

// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg)

// })

// myEmitter.emit('someEvent', 'the event was emitted')

var Person = function(name, lastName){
  this.name = name;
  this.lastName = lastName
}

util.inherits(Person, events.EventEmitter);

var emmanuel = new Person('emmanuel', 40)
var james = new Person('james')
var mary = new Person('mary')

var people = [james, mary, emmanuel]

people.forEach(function(person){
  person.on('speak',function(mssg){
    console.log(person.name + ' said ' + mssg)
  })
})

james.emit('speak', 'hey dudes')
emmanuel.emit('speak', 'I want to run')

var readMe = fs.readFileSync('readme.md', 'utf8')

console.log(readMe)
















