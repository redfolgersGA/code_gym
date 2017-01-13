// functional programming with lodash!

// lodash api:
// https://lodash.com/docs/4.17.4
var cn = require('./common.js'),
    util = require('util'),
    // usually it's best to use _, the dumb node repl is weird about this though
<<<<<<< HEAD
    lo = require('lodash'),
=======
    lo = require('lodash'), 
>>>>>>> c874d43f878c28f46e21e8448880b0b0beca6b39
    pokemon = require('../data/pokemon.js'),
    sw = require('../data/strengthsAndWeaknesses.js');


function prewalk(f, x){
  var y = f(x);
  if(lo.isObject(y)){
    return(
      lo.fromPairs(
	lo.map(
	  lo.toPairs(y),
<<<<<<< HEAD
	  (entry) =>
	    lo.map(entry,
=======
	  (entry) => 
	    lo.map(entry, 
>>>>>>> c874d43f878c28f46e21e8448880b0b0beca6b39
		   z => prewalk(f, z))))
    );
  }else if(lo.isArray(y)){
    return lo.map(y, z => prewalk(f, z));
  }else{
    return f(x);
  }
}

function beholdPrewalk () {
  cn.text("Prewalk generalizes the idea of scanning over a collection and",
	  "performing some transformation (ie, calling some function)",
	  "on every item in it.");
  console.log('pokemon[0]:');
  console.log(pokemon[0]);
<<<<<<< HEAD
  console.log('----------------------------------------')
  console.log('sw')
=======
>>>>>>> c874d43f878c28f46e21e8448880b0b0beca6b39
  console.log('pokemon[0], transformed to lowercase:');
  console.log(
    prewalk(
      x => lo.isString(x) ? lo.toLower(x) : x,
      pokemon[0]
    )
  );
}

<<<<<<< HEAD
function workshop(){
  cn.text('in workshops!');
  cn.text('case 1');
  let ar1 = ['HI', "THere"];
  console.log(
    ar1.map(lo.toLower)
    );
  console.log(
    "RHINOCEROUS".toLowerCase()
    );
  var ar2 = [["HI"], ["THERE"]];
}

module.exports = function(){
  cn.runFuns(
    [["beholdPrewalk", beholdPrewalk],
      ["workshop", workshop]
=======
module.exports = function(){
  cn.runFuns(
    [["beholdPrewalk", beholdPrewalk],
>>>>>>> c874d43f878c28f46e21e8448880b0b0beca6b39
    ]);
};
