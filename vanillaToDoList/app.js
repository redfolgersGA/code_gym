// selectors
const foodLogInput = $('.foodLogInput')
const breakfastButton = $('#breakfastBttn')
const lunchButton = $('#lunchBttn')
const foodLoggedDivContainer = $('.foodContainer')
const foodLoggedDivBreakfast = $('div#breakfast')
const foodLoggedDivLunch = $('div#lunch')
const foodLoggedUlTag = $('.foodList')
const foodLoggedBreakfastUl = $('.breakfastUl')
const foodLoggedLunchUl = $('.lunchUl')
const totalsDiv = $('.totals')
const body = $('body')
var tableClass = $('.table')
var tableBody = $('<tbody></tbody>')

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
          foodLoggedBreakfastUl.append(liTagForFood)

          // YOU MAY HAVE TO MOVE THIS OUTSIDE OR INTO A FUNCTION
          updateTotalsDiv()

          deleteLiBttn.on('click', deleteTheLi)
          counter++

}

function addLunch() {
  lunchButton.on('click', function(e){
    e.preventDefault();

    $.ajax({
        type: "GET",
        url: "https://api.edamam.com/api/nutrition-data?&ingr="+"1 large egg",
        // url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&",
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


function deleteTheLi(e){
  const deleteLiBttn = $('button.deleteBttn')
  const liTagForFood = $('li.list-group-item')
  const foodCalories = $('p.calories')
  const foodProtein = $('p.protein')
  const foodFats = $('p.fats')
  const foodCarbs = $('p.carbs')
  e.target.parentElement.remove()
  // console.log(Math.round(fats), "is now")

  console.log(carbs)
 fats = fats - foodFats.text().match(/\d+/g).map(Number)[0];
 protein = protein - foodProtein.text().match(/\d+/g).map(Number)[0];
 carbs = carbs - foodCarbs.text().match(/\d+/g).map(Number)[0];
 calories = calories - foodCalories.text().match(/\d+/g).map(Number)[0];

  console.log(carbs)


 // console.log(convertFatStringToNumber)
 // console.log(foodFats)


// for(var i=0;i<convertFatStringToNumber.length;i++){
//   foodFats
// }
//  console.log(convertFatStringToNumber[0])

 // const reducer = (accumulator, currentValue) => accumulator + currentValue;
 // console.log(convertFatStringToNumber.reduce(reducer))



 // fats = fats - convertFatStringToNumber.reduce(reducer)
 // console.log(fats, "is now")


 //  console.log(convertFatStringToNumber)



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



