$(document).ready(function(){
console.log("loaded")

function getResults (){

var classItem = $('.item');
classItem.remove()
var inputBox = $("input#itunes-search");
inputBox.keyup(function(){
  var query = $(this).val();
  console.log(query)

  $.ajax({
    type: "GET",
    url: "https://itunes.apple.com/search",
    dataType: "jsonp",
    data : { term: query, media: "music", entity: "album", limit: 25},
    success: function (data){
      console.log(data)
    }

  })
})

// AJAX CALL



console.log("clicked")
}

var button = $('button#click-me');

button.on("click", getResults)









  // END END END END
})
  // console.log("loaded");
  // var $body = $('body');

  // $('button').click(function(){
  // $('body').removeClass('item');


  // })

  // getResults function goes here
  // function getResults(){
  //   $('body').removeClass('item');
  // }

  // Event Handlers go here

// $.ajax({
// url: 'https://itunes.apple.com/search',
// method: 'GET',
// data : { term: query, media: "music",entity: "album",limit: 25}
// success: function(data) {
//   result = data.results;
//   $results = $('<ul>');
//   var $item, $thumbnail, $description, $artist, $album, $price;
//   ul.forEach()
// }
// })


// });

// $.ajax({
//   url:
//   type:
//   data:
//   success:
//   error:
// })
