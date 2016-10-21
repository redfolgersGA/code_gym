snakewater_montana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
}
Object {paleontologist: "Dr. Alan Grant", depth: "10 meters", specimen: "Velociraptor"}

var guestOfHonor = ['Dr. Alan Grant'];

snakewater_montana['Velociraptor'] = 'clever_girl'
"clever_girl"
------

var nicaraguanSpecimens = ['Tyrannosaurus Rex','Stegosaurous','Triceratops','Velociraptor'];

var favoriteSpecimen = nicaraguanSpecimens

nicaragua['annual_budget'] = 250000
250000

//hammonds_mines is the variable within that variable is the obkect buenos aires 
within the object buenos_aires are the objects depth, annual budget and speciemns
and specimens has an array which are dilophosaurus and brachiosaurus//

hammonds_mines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ]
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ]
  }
}
Object {buenos_aires: Object, mexico: Object}

hammonds_mines['mexico']['depth'];
"350 meters"

var mexico_mineDepth = { depth: "350 meters",}

hammonds_mines['buenos_aires']['annual_budget']
1000000

var buenosAiresBudget = { annual_budget: 1000000,}
undefined

hammonds_mines['buenos_aires']['specimens']
["Dilophosaurus", "Brachiosaurus"]

hammonds_mines['Nicaragua']
undefined

var buenosAiresBudgetCopy
undefined
var nicaraguaBudget
undefined
var mexicoBudget
undefined

buenosAiresBudget['annual_budget']
1000000

var annualCost 
undefined

buenosAiresBudget['annual_budget'] = 'annualCost'
"annualCost"

hammonds_mines['annual_budget'] = 'annualCost'
"annualCost"

hammonds_mines['mexico']['specimens']['Parasaurolophus']
undefined
