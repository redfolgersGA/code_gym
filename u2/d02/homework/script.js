$(document).ready(function(){



var input = $('input.u-full-width')
var movieTitle = input.val()

var apiKeyAccess = "http://www.omdbapi.com/?t=" + movieTitle +



var getData = function(movieTitle){
  var button = $('button.u-full-width')
  button.on('click', function(){
    $.ajax({
        url: apiKeyAccess,
        method: "get",
        success: function(data){


           console.log(data);

           var input = $('input.u-full-width')
           var movieNameH5Tag = $('h5');



           movieNameH5Tag.text(data.Title)
          // handleResponse(data);
        }
      })

  })
}

getData()


  // "http://www.omdbapi.com/?t=" + movieTitle + "&r=json",

  // var getData = function(movieTitle){


  // // };

  // getData("kindergarten cop 2");






//every input tag has a hidden "value=" attribute that by default is
//an empty string " " . .val() takes what the user writes in the input and holds it
  // var addAJAXFunction = function(){
  //   $('button').on('click', function(){
  //   var inputValue = $('input').val();
  //   console.log(inputValue);
  //   getData(inputValue);


  //   })
  // };

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
