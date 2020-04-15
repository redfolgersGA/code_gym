// selectors
const foodLogInput = $('.foodLogInput')
const foodLogButton = $('.foodLogButton')
const foodLoggedDivContainer = $('.foodContainer')
const foodLoggedUlTag = $('.foodList')



foodLogButton.on('click', function(e){
  e.preventDefault()

  $.ajax({
  type: "GET",
  url: "https://api.edamam.com/api/food-database/parser?ingr=orange&nutrition-type=logging&",
  success: function(data){
    console.log(data)
  }

})




})


//   $.ajax({
//   type: "GET",
//   url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging,
//   success: function(data){

