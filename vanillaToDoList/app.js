// SELECT BODY
const body = $('body')

// SELECT INPUT TAG
const foodLogInput = $('.foodLogInput')

// BUTTONS
const breakfastButton = $('#breakfastBttn')
const lunchButton = $('#lunchBttn')
const dinnerButton = $('#dinnerBttn')

// DIVS FOR UL's in the HTML (HARDCODED)
const foodLoggedDivContainer = $('.foodContainer')
const foodLoggedDivBreakfast = $('div#breakfast')
const foodLoggedDivLunch = $('div#lunch')
const foodLoggedDivDinner = $('div#dinner')

// UL's for the dynamically generated LI TAGS in the HTML (HARDCODED)
const foodLoggedUlTag = $('.foodList')
const foodLoggedBreakfastUl = $('.breakfastUl')
const foodLoggedLunchUl = $('.lunchUl')
const foodLoggedDinnerUl = $('.dinnerUl')


// TOTALS DIV located at bottom of DOCUMENT (HARD CODED)
const breakfastTotals = $('div.breakfastTotals')
const totalsDiv = $('.totals')


// ADDS UP TOTALS FOR THE DAY
var calories = 0
var protein = 0
var fats = 0
var carbs = 0

// next step is to grab a div/ul/li and visually represent your APIdata on the DOM
var counter = 1;


function addBreakfast(){
  breakfastButton.on('click', function(e){
    e.preventDefault()
// foodLogInput.val() YOU MUST ADD THIS TO THE END OF YOUR API CALL
      $.ajax({
        type: "GET",
        url: "https://api.edamam.com/api/nutrition-data?&ingr="+ "1 large egg",
        // url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&",
        success: breakfastSuccess
      })

  })
}

addBreakfast()

function breakfastSuccess(data){

          console.log(data)
          const foodNutrients = data.totalNutrients


          const liTagForFood = $("<li class='list-group-item breakfastLi' id=" + counter + "></li>")
          const description = $("<div class='description'></div")
          // const imageOfFood = $("<img class='foodImage'>")
          const foodName = $('<p id="foodName"></p>')
          const foodCalories = $('<p class="calories"></p>')
          const foodProtein = $('<p class="protein"></p>')
          const foodFats = $('<p class="fats"></p>')
          const foodCarbs = $('<p class="carbs"></p>')
          const foodFiber = $('<p class="fiber"></p>')

          const deleteLiBttn = $('<button type="button" class="btn btn-primary deleteBttn" id=' + counter + '></button>')

          foodLoggedDivBreakfast.append(liTagForFood)

          liTagForFood.append(description)
          liTagForFood.append(deleteLiBttn)



          foodName.text(foodLogInput.val())
          foodCalories.text("Calories " + Math.floor(data.calories))
          foodProtein.text("Protein " + Math.round(foodNutrients.PROCNT.quantity) + " g")
          foodFats.text("Fat " + Math.round(foodNutrients.FAT.quantity) + " g")
          foodCarbs.text("Carbs " + Math.round(foodNutrients.CHOCDF.quantity) + " g")

          calories = calories + Math.floor(foodNutrients.ENERC_KCAL.quantity)
          console.log(calories, 'calories')
          protein = protein + Math.round(foodNutrients.PROCNT.quantity)
          console.log(protein, 'protein')
          fats = fats + Math.round(foodNutrients.FAT.quantity)
          console.log(fats, 'fats')
          carbs = carbs + Math.round(foodNutrients.CHOCDF.quantity)
          console.log(carbs, 'carbs')



          description.append(foodName)
          description.append(foodCalories)
          description.append(foodProtein)
          description.append(foodFats)
          description.append(foodCarbs)




          // imageOfFood.attr('src', data.parsed[0].)
          foodLoggedBreakfastUl.append(liTagForFood)

          // YOU MAY HAVE TO MOVE THIS OUTSIDE OR INTO A FUNCTION
          updateTotalsDiv()
          updateBreakfastTotals()

          deleteLiBttn.on('click', deleteTheLi)
          counter++

}

var totalBFastCarbsNumber = 0
var totalBFastFatsNumber = 0
var totalBFastProteinNumber = 0
var totalBFastCaloriesNumber = 0


function updateBreakfastTotals(){
  // pretty much the same logic as updateTotalsDiv FUNCTION except itll grab totals from the break fast div only
  // QUERY THE DOM
  const breakfastCarbs = $('.breakfastLi div.description p.carbs').text()
  const breakfastFats = $('.breakfastLi div.description p.fats').text()
  const breakfastProtein = $('.breakfastLi div.description p.protein').text()
  const breakfastCalories = $('.breakfastLi div.description p.calories').text()
  const breakfastTotals = $('div.breakfastTotals')

  const breakfastFatsPTag = $('#breakfastFatsPTag')
  const breakfastProteinPTag = $('#breakfastProteinPTag')
  const breakfastCarbsPTag = $('#breakfastCarbsPTag')
  const breakfastCaloriesPTag = $('#breakfastCaloriesPTag')

  totalBFastFatsNumber = totalBFastFatsNumber + breakfastFats.match(/\d+/g).map(Number)[0]
  totalBFastProteinNumber = totalBFastProteinNumber + breakfastProtein.match(/\d+/g).map(Number)[0]
  totalBFastCarbsNumber = totalBFastCarbsNumber + breakfastCarbs.match(/\d+/g).map(Number)[0]
  totalBFastCaloriesNumber = totalBFastCaloriesNumber + breakfastCalories.match(/\d+/g).map(Number)[0]


  breakfastFatsPTag.text("Total Fat " + totalBFastFatsNumber)
  breakfastProteinPTag.text("Total Protein " + totalBFastProteinNumber)
  breakfastCarbsPTag.text("Total Carbs " + totalBFastCarbsNumber)
  breakfastCaloriesPTag.text("Total Calories " + totalBFastCaloriesNumber)

  console.log(totalBFastCaloriesNumber)

  // REPLICATE THE ABOVE LOGIC FOR LUNCH AND DINNER
  // ADD LOGIC TO SUBTRACT FROM BREAKFAST DIV TOTALS WHEN LI ITEM IS REMOVED














}

function addLunch() {
  lunchButton.on('click', function(e){
    e.preventDefault();

    $.ajax({
        type: "GET",
        url: "https://api.edamam.com/api/nutrition-data?app_id=&ingr="+"1 large egg",
        // url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&app_id=",
        success: lunchSuccess
      })

  })

}

addLunch()

function lunchSuccess(data){

  const foodNutrients = data.totalNutrients

  const liTagForFood = $("<li class='list-group-item lunchLi' id=" + counter + "></li>")
          const description = $("<div class='description'></div")
          // const imageOfFood = $("<img class='foodImage'>")
          const foodName = $('<p id="foodName"></p>')
          const foodCalories = $('<p class="calories"></p>')
          const foodProtein = $('<p class="protein"></p>')
          const foodFats = $('<p class="fats"></p>')
          const foodCarbs = $('<p class="carbs"></p>')
          const foodFiber = $('<p class="fiber"></p>')

          const deleteLiBttn = $('<button type="button" class="btn btn-primary deleteBttn" id=' + counter + '></button>')

          foodLoggedDivLunch.append(liTagForFood)

          liTagForFood.append(description)
          liTagForFood.append(deleteLiBttn)



          foodName.text(foodLogInput.val())
          foodCalories.text("Calories " + Math.floor(data.calories))
          foodProtein.text("Protein " + Math.round(foodNutrients.PROCNT.quantity) + " g")
          foodFats.text("Total Fat " + Math.round(foodNutrients.FAT.quantity) + " g")
          foodCarbs.text("Total Carbs " + Math.round(foodNutrients.CHOCDF.quantity) + " g")

          calories = calories + Math.floor(foodNutrients.ENERC_KCAL.quantity)
          console.log(calories, 'calories')
          protein = protein + Math.round(foodNutrients.PROCNT.quantity)
          console.log(protein, 'protein')
          fats = fats + Math.round(foodNutrients.FAT.quantity)
          console.log(fats, 'fats')
          carbs = carbs + Math.round(foodNutrients.CHOCDF.quantity)
          console.log(carbs, 'carbs')



          description.append(foodName)
          description.append(foodCalories)
          description.append(foodProtein)
          description.append(foodFats)
          description.append(foodCarbs)




          // imageOfFood.attr('src', data.parsed[0].)
          foodLoggedLunchUl.append(liTagForFood)

          // YOU MAY HAVE TO MOVE THIS OUTSIDE OR INTO A FUNCTION
          updateTotalsDiv()

          deleteLiBttn.on('click', deleteTheLi)
          counter++


}

function addDinner(){
  dinnerButton.on('click', function(e){
    e.preventDefault();

    $.ajax({
        type: "GET",
        url: "https://api.edamam.com/api/nutrition-data?app_id=&ingr="+"1 large egg",
        // url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&app_id=",
        success: dinnerSuccess
      })

  })

}

addDinner()

function dinnerSuccess(data) {
  console.log("dinnerButton")

  const foodNutrients = data.totalNutrients

  const liTagForFood = $("<li class='list-group-item dinnerLi' id=" + counter + "></li>")
          const description = $("<div class='description'></div")
          // const imageOfFood = $("<img class='foodImage'>")
          const foodName = $('<p id="foodName"></p>')
          const foodCalories = $('<p class="calories"></p>')
          const foodProtein = $('<p class="protein"></p>')
          const foodFats = $('<p class="fats"></p>')
          const foodCarbs = $('<p class="carbs"></p>')
          const foodFiber = $('<p class="fiber"></p>')

          const deleteLiBttn = $('<button type="button" class="btn btn-primary deleteBttn" id=' + counter + '></button>')

          foodLoggedDivDinner.append(liTagForFood)

          liTagForFood.append(description)
          liTagForFood.append(deleteLiBttn)



          foodName.text(foodLogInput.val())
          foodCalories.text("Calories " + Math.floor(data.calories))
          foodProtein.text("Protein " + Math.round(foodNutrients.PROCNT.quantity) + " g")
          foodFats.text("Total Fat " + Math.round(foodNutrients.FAT.quantity) + " g")
          foodCarbs.text("Total Carbs " + Math.round(foodNutrients.CHOCDF.quantity) + " g")

          calories = calories + Math.floor(foodNutrients.ENERC_KCAL.quantity)
          console.log(calories, 'calories')
          protein = protein + Math.round(foodNutrients.PROCNT.quantity)
          console.log(protein, 'protein')
          fats = fats + Math.round(foodNutrients.FAT.quantity)
          console.log(fats, 'fats')
          carbs = carbs + Math.round(foodNutrients.CHOCDF.quantity)
          console.log(carbs, 'carbs')



          description.append(foodName)
          description.append(foodCalories)
          description.append(foodProtein)
          description.append(foodFats)
          description.append(foodCarbs)




          // imageOfFood.attr('src', data.parsed[0].)
          foodLoggedDinnerUl.append(liTagForFood)

          // YOU MAY HAVE TO MOVE THIS OUTSIDE OR INTO A FUNCTION
          updateTotalsDiv()




          deleteLiBttn.on('click', deleteTheLi)
          counter++



}


function deleteTheLi(e){
  const deleteLiBttn = $('button.deleteBttn')
  const liTagForFood = $('li.list-group-item')
  const foodCalories = $('p.calories')
  const foodProtein = $('p.protein')
  const foodFats = $('p.fats')
  const foodCarbs = $('p.carbs')
  e.target.parentElement.remove()
  // console.log(Math.round(fats), "is now")

// OVERALL DAILY TOTALS subtracted from when the DELETE BUTTON IS PRESSED
 fats = fats - foodFats.text().match(/\d+/g).map(Number)[0];
 protein = protein - foodProtein.text().match(/\d+/g).map(Number)[0];
 carbs = carbs - foodCarbs.text().match(/\d+/g).map(Number)[0];
 calories = calories - foodCalories.text().match(/\d+/g).map(Number)[0];



// BREAKFAST DELETE LOGIC--------------------------------------------

  // First QUERY the DOM for the HTML ELEMENTS THAT WILL DYNAMICALLY CHANGE
 const breakFastCaloriesPTag = $('#breakfastCaloriesPTag')
 const breakFastProteinPTag = $('#breakfastProteinPTag')
 const breakFastFatsPTag = $('#breakfastFatsPTag')
 const breakFastCarbsPTag = $('#breakfastCarbsPTag')

  // BREAKFAST TOTALS subtracted from when the DELETE BUTTON IS PRESSED

 // totalBFastCarbsNumber = totalBFastCarbsNumber -  foodCarbs.text().match(/\d+/g).map(Number)[0];
 // console.log(totalBFastCarbsNumber)
 // totalBFastFatsNumber
 // totalBFastProteinNumber
 // totalBFastCaloriesNumber



 // ALSO UPDATE BREAKFAST, LUNCH AND DINNER TOTALS DIV
 updateTotalsDiv()



}





function updateTotalsDiv () {
  totalsDiv.text("Total Calories " + Math.round(calories))
  totalsDiv.append('<p>' + "Total Protein " + Math.round(protein) + "g" + '</p>')
  totalsDiv.append('<p>' + "Total Fats " + Math.round(fats) + "g" + '</p>')
  totalsDiv.append('<p>' + "Total Carbs " + Math.round(carbs) + "g" + '</p>')



  totalsDiv.removeClass("hide")
  totalsDiv.addClass("show")
  body.append(totalsDiv)

}






// THIS FEATURE WILL ALLOW USER TO SELECT WHAT TYPE OF FOOD WAS CONSUMED AND ADD AN IMAGE OF FOOD TO THE DOM
// $.ajax({
//         type: "GET",
//         url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&app_id=e8f6cb8b&app_key=f55817f083b2b4ff70ce048485ee9db2",
//         success: function(data){
//         const descript = $("div.description")
//         const imageOfFood = $("<img class='foodImage'>")

//         imageOfFood.attr('src', data.parsed[0].food.image)

//         descript.append(imageOfFood)
//         console.log(data._links.next.href)

//         // $('div.description').append(liTag)

//           $.ajax({
//             type: "GET",
//             url: data._links.next.href,
//             success: function(data){
//               console.log(data)
//             }

//           })

//         }

// })

var date = new Date()
var monthNow = date.getUTCMonth()
var monthConverted
var dayNow = date.getDate()
var yearNow = date.getFullYear()

console.log(monthNow)

function showDate(){
  if(monthNow === 0){
    monthConverted = "January"
  }
  if(monthNow === 1){
    monthConverted = "February"
  }
  if(monthNow === 2){
    monthConverted = "March"
  }
  if(monthNow === 3){
    monthConverted = "April"
  }
  if(monthNow === 4){
    monthConverted = "May"
  }
  if(monthNow === 5){
    monthConverted = "June"
  }
  if(monthNow === 6){
    monthConverted = "July"
  }
  if(monthNow === 7){
    monthConverted = "August"
  }
  if(monthNow === 8){
    monthConverted = "September"
  }
  if(monthNow === 9){
    monthConverted = "October"
  }
  if(monthNow === 10){
    monthConverted = "Novemeber"
  }
  if(monthNow === 11){
    monthConverted = "Decemeber"
  }

  $('#showDateNow').text(monthConverted + " " + dayNow + "," + " " + yearNow)

}

showDate()

console.log(monthConverted)



