var frameworks = {
  "frontEnd": [
    {
      "name": "React",
      "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces."
    },
    {
      "name": "Angular",
      "description": "HTML enhanced for web apps"
    },
    {
      "name": "Backbone",
      "description": "Give your JS App some Backbone with Models, Views, Collections, and Events"
    }
  ], // ends frontEnd array
  "backEnd": [
    {
      "name": "Express",
      "description": "A minimalist framework for building a host of web and mobile applications as well as application programming interfaces (APIs)"
    },
    {
      "name": "Meteor",
      "description": "An open-source, model-view controller (MVC) framework for building websites and web/mobile applications."
    },
    {
      "name": "Sails",
      "description": "Sails.js offers a model-view controller (MVC) pattern for implementing data-driven application programming interfaces (APIs)."
    }
  ]
}



  var modifiedFramework = frameworks.frontEnd.map(function(framework){
    return framework.name + ".js"

  })

  modifiedFramework.forEach(function(framework){
    console.log(framework)
  })

  var modifiedFrameworkTwo = frameworks.backEnd.map(function(framework){
    return framework.name + ".js"
  })

  modifiedFrameworkTwo.forEach(function(framework){
    console.log(framework)
  })

  var filteredFrontEnd = frameworks.frontEnd.filter(function(framework){
    if(framework.description.length > 30) {
      console.log(framework)
    }else {
     console.log(framework.name +'s' + 'description is too short')
    }
  })



 var filteredBackEnd = frameworks.backEnd.filter(function(framework){

   var random = framework.name[0].toLowerCase()
  if(random === "a" || random === "e" || random === "i"|| random === "o" || random === "u"){
    return framework
  }
 })
console.log(filteredBackEnd)


// BONUS ROUND

var frontEndNames = frameworks.frontEnd.reduce(function(sum, current){
  return current = frameworks.frontEnd[0].name + ", " + frameworks.frontEnd[1].name + ", " + frameworks.frontEnd[2].name
})

console.log(frontEndNames)

var newFrontEnd = frameworks.frontEnd.map(function(framework){
  return framework.name + ".js"
})

console.log(newFrontEnd)

for(i=0;i<newFrontEnd.length;i++){
  console.log(newFrontEnd[i])
}

var newFrontEndReduced = newFrontEnd.reduce(function(sum, current){
  return current = newFrontEnd[0] + newFrontEnd[1] + newFrontEnd[2] + "are the frontend frameworks"
})

console.log(newFrontEndReduced)

var newFrameworkArray = []

newFrameworkArray.push(newFrontEndReduced)

console.log(newFrameworkArray)

var newBackEnd = frameworks.backEnd.map(function(framework){
  return framework.name + ".js"
})

var newBackEndReduced = newBackEnd.reduce(function(sum, current){
  return current = newBackEnd[0] + newBackEnd[1] + newBackEnd[2] + "are the Backend frameworks"
})

console.log(newBackEndReduced)

newFrameworkArray.push(newBackEndReduced)

console.log(newFrameworkArray)



  // var filteredBackEnd = frameworks.backEnd.filter(function(framework){
  //   if(framework.name === "React"){
  //     console.log(filteredBackEnd)
  //   }
  // })















//Part 1
//1.
// var modifiedFrontEnd =
//     frameworks.frontEnd.map(function(technologies){
//     return technologies.name + ".js";
// });
// console.log(modifiedFrontEnd)


// //2.
// var modifiedBackEnd =
//     frameworks.backEnd.map(function(technologies){
//      return technologies.name + ".js";
// });
// console.log(modifiedBackEnd)

// //Part 2
// //1.
// var filteredFrontEnd =
//     frameworks.frontEnd.filter(function(long){
//       if(long.description.length >= 30) {
//         return long;
// };
// });
// console.log(filteredFrontEnd);

// //2.
// var filteredBackEnd =
//     frameworks.backEnd.filter(function(vowel){
//       if(vowel.name.indexOf()[0] === "a" || "e" || "i" || "o" || "u") {
//         return vowel.name;
// }
// });
// console.log(filteredBackEnd);














