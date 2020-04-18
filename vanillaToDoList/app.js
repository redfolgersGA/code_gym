// selectors
const foodLogInput = $('.foodLogInput')
const foodLogButton = $('.foodLogButton')
const foodLoggedDivContainer = $('.foodContainer')
const foodLoggedUlTag = $('.foodList')
const body = $('body')

var calories = 0
var protein = 0
var fats = 0
var carbs = 0

// next step is to grab a div/ul/li and visually represent your APIdata on the DOM

foodLogButton.on('click', function(e){
  e.preventDefault()

    $.ajax({
      type: "GET",
      url: "https://api.edamam.com/api/nutrition-data?,
      // url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&",
      success: function(data){
        console.log(data)
        // const foodNutrients = data.parsed[0].food.nutrients
        // console.log(data.hints[0].measures[2].uri)
        // const liTagForFood = $("<li></li>")
        // const description = $("<div class='description'></div")
        // const imageOfFood = $("<img class='foodImage'>")
        // const foodName = $('<p id="foodName"></p>')
        // const foodCalories = $('<p class="calories"></p>')
        // const foodProtein = $('<p class="protein"></p>')
        // const foodFats = $('<p class="fats"></p>')
        // const foodCarbs = $('<p class="carbs"></p>')
        // const foodFiber = $('<p class="fiber"></p>')
        // const totalsDiv = $('.totals')

        // foodLoggedDivContainer.append(liTagForFood)

        // liTagForFood.append(description)
        // liTagForFood.append(imageOfFood)


        // foodName.text(data.text)
        // foodCalories.text("Calories " + foodNutrients.ENERC_KCAL)
        // foodProtein.text("Protein " + foodNutrients.PROCNT + " g")
        // foodFats.text("Total Fat " + foodNutrients.FAT)
        // foodCarbs.text("Total Carbs " + foodNutrients.CHOCDF)

        // calories = calories + foodNutrients.ENERC_KCAL
        // protein = protein + foodNutrients.PROCNT
        // fats = fats + foodNutrients.FAT
        // carbs = carbs + foodNutrients.CHOCDF



        // description.append(foodName)
        // description.append(foodCalories)
        // description.append(foodProtein)
        // description.append(foodFats)
        // description.append(foodCarbs)




        // imageOfFood.attr('src', data.parsed[0].food.image)
        // foodLoggedUlTag.append(liTagForFood)

        // totalsDiv.text("Total Calories " + calories)
        // totalsDiv.append('<p>' + "Total Protein " + Math.round(protein) + "g" + '</p>')
        // totalsDiv.append('<p>' + "Total Fats " + Math.round(fats) + "g" + '</p>')
        // totalsDiv.append('<p>' + "Total Carbs " + Math.round(carbs) + "g" + '</p>')



        // totalsDiv.removeClass("hide")
        // totalsDiv.addClass("show")
        // body.append(totalsDiv)



      }

    })

})


//   $.ajax({
//   type: "GET",
//   url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging,
//   success: function(data){

