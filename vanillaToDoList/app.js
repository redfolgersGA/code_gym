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
      url: "https://api.edamam.com/api/nutrition-data?&ingr="+foodLogInput.val(),
      // url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&",
      success: function(data){
        console.log(data)
        const foodNutrients = data.totalNutrients

        const liTagForFood = $("<li></li>")
        const description = $("<div class='description'></div")
        const imageOfFood = $("<img class='foodImage'>")
        const foodName = $('<p id="foodName"></p>')
        const foodCalories = $('<p class="calories"></p>')
        const foodProtein = $('<p class="protein"></p>')
        const foodFats = $('<p class="fats"></p>')
        const foodCarbs = $('<p class="carbs"></p>')
        const foodFiber = $('<p class="fiber"></p>')
        const totalsDiv = $('.totals')

        foodLoggedDivContainer.append(liTagForFood)

        liTagForFood.append(description)
        liTagForFood.append(imageOfFood)


        foodName.text(foodLogInput.val())
        foodCalories.text("Calories " + data.calories)
        foodProtein.text("Protein " + foodNutrients.PROCNT.quantity + " g")
        foodFats.text("Total Fat " + foodNutrients.FAT.quantity + " g")
        foodCarbs.text("Total Carbs " + foodNutrients.CHOCDF.quantity + " g")

        calories = calories + foodNutrients.ENERC_KCAL.quantity
        protein = protein + foodNutrients.PROCNT.quantity
        fats = fats + foodNutrients.FAT.quantity
        carbs = carbs + foodNutrients.CHOCDF.quantity



        description.append(foodName)
        description.append(foodCalories)
        description.append(foodProtein)
        description.append(foodFats)
        description.append(foodCarbs)




        // imageOfFood.attr('src', data.parsed[0].food.image)
        foodLoggedUlTag.append(liTagForFood)

        totalsDiv.text("Total Calories " + calories)
        totalsDiv.append('<p>' + "Total Protein " + Math.round(protein) + "g" + '</p>')
        totalsDiv.append('<p>' + "Total Fats " + Math.round(fats) + "g" + '</p>')
        totalsDiv.append('<p>' + "Total Carbs " + Math.round(carbs) + "g" + '</p>')



        totalsDiv.removeClass("hide")
        totalsDiv.addClass("show")
        body.append(totalsDiv)



      }

    })

})


//   $.ajax({
//   type: "GET",
//   url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging,
//   success: function(data){

