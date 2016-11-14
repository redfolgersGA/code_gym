$(document).ready(function(){

  var getData = function(movieTitle){

     $.ajax({
        url: "http://www.omdbapi.com/?t=" + movieTitle + "&r=json",
        method: "get",
        success: function(data){
           console.log(data);
          handleResponse(data);
        }
      })
  };

  getData();






//every input tag has a hidden "value=" attribute that by default is
//an empty string " " . .val() takes what the user writes in the input and holds it
  var addAJAXFunction = function(){
    $('button').on('click', function(){
    var inputValue = $('input').val();
    console.log(inputValue);
    getData(inputValue);


    })
  };

  var appendMovie = function(name,imagePath){
    $('h5').text(name);
    $('img').attr('src', imagePath);
  };

  var handleResponse = function(data){
    var movieName = data.Title
    var movieImage = data.Poster
    console.log(movieName);
    console.log(movieImage);
    appendMovie(movieName, movieImage)

  };

}); // ends doc.ready
