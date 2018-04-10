var buenosAires = {
  location: "Buenos Aires",
  depthInMeters: "400",
  annualBudget: 1000000,
  specimens: ["Dilophosaurus", "Brachiosaurus"]

};

var mexico = {
  location: "Mexico",
  depthInMeters: "350",
  annualBudget: 1500000,
  specimens: ["Velociraptor", "Brachiosaurus"]
};

var nicaragia = {
  location: "Nicaragua",
  depthInMeters: "200",
  annualBudget: 900000,
  specimens: ["T-rex", "Stegosaurus", "Triceraptops", "Velociraptor"]
}

var snakewaterMontana = {
  location: "SnakewaterMontana",
  depthInMeters: "10",
  annualBudget: 190000,
  specimens: ["Gallimimus","Parasaurolpophus"]
};

for( var specimen in buenosAires) {
  console.log(buenosAires.specimen)
}

var buenosAires = {
  location: "Buenos Aires",
  depthInMeters: "400",
  annualBudget: 1000000,
  specimens: ["Dilophosaurus","Brachiosaurus"]
};

var mexico = {
  location: "Mexico",
  depthInMeters: "350",
  annualBudget: 900000,
  specimens: ["Gallimimus","Parasaurolophus"]
};

var snakewaterMontana = {
  location: "SnakewaterMontana",
  depthInMeters: "10",
  annualBudget: 150000,
  specimens: ["Velociraptor","Brachiosaurus"]
};

var nicaragua = {
  location: "Nicaragua",
  depthInMeters: "200",
  annualBudget: 1500000,
  specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]
};

var hammondsMines = [buenosAires, mexico, snakewaterMontana,nicaragua]

for(i=0;i<hammondsMines.length;i++){
  console.log("Here it is:", hammondsMines[i].location)
  console.log(hammondsMines[i].annualBudget)
}

var sumTotal = 0;
for(i=0;i<hammondsMines.length;i++){
  sumTotal += hammondsMines[i].annualBudget;
  console.log(sumTotal)
}
console.log(sumTotal)
var buenosAires = {
  location: "Buenos Aires",
  depthInMeters: "400",
  annualBudget: 1000000,
  specimens: ["Dilophosaurus","Brachiosaurus"]
};

var mexico = {
  location: "Mexico",
  depthInMeters: "350",
  annualBudget: 900000,
  specimens: ["Gallimimus","Parasaurolophus"]
};

var snakewaterMontana = {
  location: "SnakewaterMontana",
  depthInMeters: "10",
  annualBudget: 150000,
  specimens: ["Velociraptor","Brachiosaurus"]
};

var nicaragua = {
  location: "Nicaragua",
  depthInMeters: "200",
  annualBudget: 1500000,
  specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]
};

// for(i=0;i<buenosAires.specimens.length;i++){
//   console.log(buenosAires.specimens[i])
// }

// for(i=0;i<mexico.specimens.length;i++){
//   console.log(mexico.specimens[i])
// }

// for(i=0;i<snakewaterMontana.specimens.length;i++){
//   console.log(snakewaterMontana.specimens[i])
// }

// for(i=0;i<nicaragua.specimens.length;i++){
//   console.log(nicaragua.specimens[i])
// }

function outputSpecimen(obj){
  for(i=0;i<obj.specimens.length;i++){
    console.log(obj.specimens[i])
  }

}

outputSpecimen(snakewaterMontana)
console.log("--------------")
outputSpecimen(buenosAires)
console.log('--------------')
outputSpecimen(mexico)
console.log('-----------')
outputSpecimen(nicaragua)
console.log('-----------')








