// selectors
const foodLogInput = $('.foodLogInput')
const foodLogButton = $('.foodLogButton')
const foodLoggedDivContainer = $('.foodContainer')
const foodLoggedUlTag = $('.foodList')

// next step is to grab a div/ul/li and visually represent your APIdata on the DOM

foodLogButton.on('click', function(e){
  e.preventDefault()

    $.ajax({
      type: "GET",
      url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&",
      success: function(data){
        const foodNutrients = data.parsed[0].food.nutrients
        const liTagForFood = $("<li></li>")
        const description = $("<div class='imageDiv'></div")
        const imageOfFood = $("<img class='foodImage'>")
        const foodName = $('<p></p>')
        const foodCalories = $('<p></p>')
        const foodProtein = $('<p></p>')
        const foodFats = $('<p></p>')
        const foodCarbs = $('<p></p>')
        const foodFiber = $('<p></p>')

        foodLoggedDivContainer.append(liTagForFood)

        liTagForFood.append(description)
        liTagForFood.append(imageOfFood)


        foodName.text(data.text)
        foodCalories.text(foodNutrients.ENERC_KCAL + " calories")


        description.append(foodName)
        description.append(foodCalories)


        imageOfFood.attr('src', data.parsed[0].food.image)







        foodLoggedUlTag.append(liTagForFood)


      }

    })

})


//   $.ajax({
//   type: "GET",
//   url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging,
//   success: function(data){

