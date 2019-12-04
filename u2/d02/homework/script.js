$(document).ready(function(){


// var h5TagOne = $('h5').eq(0)
// var imgTagOne = $('img').eq(0)
// var h5TagTwo = $('h5').eq(1)
// var imgTagTwo = $('img').eq(1)

var fourColumnsDiv = $('div.four')
var inputVal = $('input')
var button = $('button')




button.click(function(){
  var apiKey = "http://www.omdbapi.com/?s=" + inputVal.val() + "apikey"
  console.log(inputVal.val())
  var h5Tags = $('h5')
  var imgTags = $('img')

  h5Tags.remove()
  imgTags.remove()

  $.ajax({
  type: "GET",
  url: apiKey,

  success: function(data){
    console.log(apiKey)


    for(var i =0; i<data.Search.length;i++){
      fourColumnsDiv.append('<h5>' + data.Search[i].Title + '</h5>')
      fourColumnsDiv.append('<img src=' + data.Search[i].Poster +">")


    }











    console.log(data)
  }
})


    })























  // -------------------------------------------------------------NEW TRIAL 11/25/19




// var movieTitle = "babe"
// var input = $('input.u-full-width')
// var movieTitle = input.val()


// var apiKey = "http://www.omdbapi.com/?t="+movieTitle+"apikey"

// var button = $('button.u-full-width')
// button.on('click', function(){
//   $.ajax({
//     url: apiKey,
//     method: "GET",
//     success: function(data){
//       console.log(data)
//       var h5 = $('h5')
//       var img = $('img')
//       h5.text(data.Title)
//       img.attr('src', data.Poster)
//     }
//   })
// })









  // var getData = function(movieTitle){
  //   var h5 = $('h5')
  //   h5.text(movieTitle)


  // };

  // getData();






//every input tag has a hidden "value=" attribute that by default is
//an empty string " " . .val() takes what the user writes in the input and holds it
  // var addAJAXFunction = function(){
  //   $('button').on('click', function(){
  //   var inputValue = $('input').val();
  //   console.log(inputValue);
  //   getData(inputValue);


  //   })
  // };

  // addAJAXFunction()

  // var appendMovie = function(name,imagePath){
  //   $('h5').text(name);
  //   $('img').attr('src', imagePath);
  // };

  // var handleResponse = function(data){
  //   var movieName = data.Title
  //   var movieImage = data.Poster
  //   console.log(movieName);
  //   console.log(movieImage);
  //   appendMovie(movieName, movieImage)

  // };

}); // ends doc.ready
