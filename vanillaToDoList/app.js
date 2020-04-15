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
      url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&,
      success: function(data){
        const liTagForFood = $("<li></li>")
        const imgTagForFoodLi = $("<img>")

        liTagForFood.text(data.text)
        liTagForFood.append(imgTagForFoodLi)

        imgTagForFoodLi.attr('src', data.parsed[0].food.image)


        foodLoggedUlTag.append(liTagForFood)
        console.log(data.parsed[0].food.image)
        foodLoggedDivContainer.css({"border": "solid 1px", "height": "200px", "width": "200px"})
      }

    })

})


//   $.ajax({
//   type: "GET",
//   url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging,
//   success: function(data){

