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
      url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&
        const liTagForFood = $("<li></li>")
        const divForImageTag = $("<div class='imageDiv'></div")
        const imgTagForFoodLi = $("<img class='foodImage'>")



        liTagForFood.text(data.text)

        imgTagForFoodLi.attr('src', data.parsed[0].food.image)

        divForImageTag.append(imgTagForFoodLi)





        foodLoggedUlTag.append(liTagForFood)
        foodLoggedUlTag.append(divForImageTag)


      }

    })

})


//   $.ajax({
//   type: "GET",
//   url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging,
//   success: function(data){

