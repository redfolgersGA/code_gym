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
//Part 1
//1.
var modifiedFrontEnd =
    frameworks.frontEnd.map(function(technologies){
    return technologies.name + ".js";
});
console.log(modifiedFrontEnd)


//2.
var modifiedBackEnd =
    frameworks.backEnd.map(function(technologies){
     return technologies.name + ".js";
});
console.log(modifiedBackEnd)

//Part 2
//1.
var filteredFrontEnd =
    frameworks.frontEnd.filter(function(long){
      if(long.description.length >= 30) {
        return long;
};
});
console.log(filteredFrontEnd);

//2.
var filteredBackEnd =
    frameworks.backEnd.filter(function(vowel){
      if(vowel.name.indexOf()[0] === "a" || "e" || "i" || "o" || "u") {
        return vowel.name;
}
});
console.log(filteredBackEnd);














