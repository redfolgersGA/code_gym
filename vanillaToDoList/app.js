// selectors
const foodLogInput = $('.foodLogInput')
const foodLogButton = $('.foodLogButton')
const foodLoggedDivContainer = $('.foodContainer')
const foodLoggedUlTag = $('.foodList')
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
foodLogButton.on('click', function(e){
  e.preventDefault()

    $.ajax({
      type: "GET",
      url: "https://api.edamam.com/api/nutrition-data?&ingr="+foodLogInput.val(),
      // url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&",
      success: function(data){
        console.log(data)
        const foodNutrients = data.totalNutrients


        const liTagForFood = $("<li class='list-group-item' id=" + counter + "></li>")
        const description = $("<div class='description'></div")
        // const imageOfFood = $("<img class='foodImage'>")
        const foodName = $('<p id="foodName"></p>')
        const foodCalories = $('<p class="calories"></p>')
        const foodProtein = $('<p class="protein"></p>')
        const foodFats = $('<p class="fats"></p>')
        const foodCarbs = $('<p class="carbs"></p>')
        const foodFiber = $('<p class="fiber"></p>')
        const totalsDiv = $('.totals')
        const deleteLiBttn = $('<button type="button" class="btn btn-primary deleteBttn" id=' + counter + '></button>')

        foodLoggedDivContainer.append(liTagForFood)

        liTagForFood.append(description)
        liTagForFood.append(deleteLiBttn)



        foodName.text(foodLogInput.val())
        foodCalories.text("Calories" + data.calories)
        foodProtein.text("Protein" + Math.round(foodNutrients.PROCNT.quantity) + " g")
        foodFats.text("Total Fat" + Math.round(foodNutrients.FAT.quantity) + " g")
        foodCarbs.text("Total Carbs" + Math.round(foodNutrients.CHOCDF.quantity) + " g")

        calories = calories + Math.round(foodNutrients.ENERC_KCAL.quantity)
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
        foodLoggedUlTag.append(liTagForFood)

        // YOU MAY HAVE TO MOVE THIS OUTSIDE OR INTO A FUNCTION
        totalsDiv.text("Total Calories " + Math.round(calories))
        totalsDiv.append('<p>' + "Total Protein " + Math.round(protein) + "g" + '</p>')
        totalsDiv.append('<p>' + "Total Fats " + Math.round(fats) + "g" + '</p>')
        totalsDiv.append('<p>' + "Total Carbs " + Math.round(carbs) + "g" + '</p>')



        totalsDiv.removeClass("hide")
        totalsDiv.addClass("show")
        body.append(totalsDiv)

        deleteLiBttn.on('click', deleteTheLi)
        counter++
      }

    })

})


function deleteTheLi(e){
  const deleteLiBttn = $('button.deleteBttn')
  const liTagForFood = $('li.list-group-item')
  const foodCalories = $('p.calories')
  const foodProtein = $('p.protein')
  const foodFats = $('p.fats')
  const foodCarbs = $('p.carbs')
  e.target.parentElement.remove()
  // console.log(Math.round(fats), "is now")

  console.log(fats)
 fats = fats - foodFats.text().match(/\d+/g).map(Number)[0];
  console.log(fats)

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



