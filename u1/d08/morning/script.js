

var emmanuel = {};

emmanuel.firstName = 'Emmanuel';
emmanuel.lastName = 'Paulino';
emmanuel.age = 27;
emmanuel.hobbies = ['guitar', 'xbox'];

//var printName = function(obj){
  //console.log(obj.firstName + ' ' + obj.lastName)

//}

//printName(emmanuel)

emmanuel.printName = function() {
  retrun this.firstName + ' ' + this.lastName; }

console.log(emmanuel.printName());


emmanuel.printAll = function() {
console.log('Hi my name is' + this.printName() + ' my hobbies include' + this.hobbies.join(", "));
}

emmanuel.printAll();
//for ( var i = 0; i < this.hobbies.join; i++) {
  //str += this.hobbies.length[i]; }
}
