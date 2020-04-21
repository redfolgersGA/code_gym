// selectors
const foodLogInput = $('.foodLogInput')
const foodLogButton = $('.foodLogButton')
const foodLoggedDivContainer = $('.foodContainer')
const foodLoggedUlTag = $('.foodList')
const body = $('body')

// ADDS UP TOTALS FOR THE DAY
var calories = 0
var protein = 0
var fats = 0
var carbs = 0

// next step is to grab a div/ul/li and visually represent your APIdata on the DOM

foodLogButton.on('click', function(e){
  e.preventDefault()

    $.ajax({
      type: "GET",
      url: "https://api.edamam.com/api/nutrition-data?&ingr="+foodLogInput.val(),
      // url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&",
      success: function(data){
        console.log(data)
        const foodNutrients = data.totalNutrients

        const liTagForFood = $("<li></li>")
        const description = $("<div class='description'></div")
        // const imageOfFood = $("<img class='foodImage'>")
        const foodName = $('<p id="foodName"></p>')
        const foodCalories = $('<p class="calories"></p>')
        const foodProtein = $('<p class="protein"></p>')
        const foodFats = $('<p class="fats"></p>')
        const foodCarbs = $('<p class="carbs"></p>')
        const foodFiber = $('<p class="fiber"></p>')
        const totalsDiv = $('.totals')

        foodLoggedDivContainer.append(liTagForFood)

        liTagForFood.append(description)



        foodName.text(foodLogInput.val())
        foodCalories.text("Calories  " + data.calories)
        foodProtein.text("Protein " + Math.round(foodNutrients.PROCNT.quantity) + " g")
        foodFats.text("Total Fat " + Math.round(foodNutrients.FAT.quantity) + " g")
        foodCarbs.text("Total Carbs " + Math.round(foodNutrients.CHOCDF.quantity) + " g")

        calories = calories + foodNutrients.ENERC_KCAL.quantity
        protein = protein + foodNutrients.PROCNT.quantity
        fats = fats + foodNutrients.FAT.quantity
        carbs = carbs + foodNutrients.CHOCDF.quantity



        description.append(foodName)
        description.append(foodCalories)
        description.append(foodProtein)
        description.append(foodFats)
        description.append(foodCarbs)




        // imageOfFood.attr('src', data.parsed[0].)
        foodLoggedUlTag.append(liTagForFood)

        totalsDiv.text("Total Calories " + Math.floor(calories))
        totalsDiv.append('<p>' + "Total Protein " + Math.round(protein) + "g" + '</p>')
        totalsDiv.append('<p>' + "Total Fats " + Math.round(fats) + "g" + '</p>')
        totalsDiv.append('<p>' + "Total Carbs " + Math.round(carbs) + "g" + '</p>')



        totalsDiv.removeClass("hide")
        totalsDiv.addClass("show")
        body.append(totalsDiv)
      }

    })

})

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
console.log(monthNow)

function convertMonthNow(){
  if(monthNow === 0){
    console.log("January")
  }
  if(monthNow === 1){
    console.log("February")
  }
  if(monthNow === 2){
    console.log("March")
  }
  if(monthNow === 3){
    console.log("April")
  }
  if(monthNow === 4){
    console.log("May")
  }
  if(monthNow === 5){
    console.log("June")
  }
  if(monthNow === 6){
    console.log("July")
  }
  if(monthNow === 7){
    console.log("August")
  }
  if(monthNow === 8){
    console.log("September")
  }
  if(monthNow === 9){
    console.log("October")
  }
  if(monthNow === 10){
    console.log("Novemeber")
  }
  if(monthNow === 11){
    console.log("Decemeber")
  }
}

convertMonthNow()

// $('.showDateNow').text()

