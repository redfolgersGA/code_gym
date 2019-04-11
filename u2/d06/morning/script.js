$(document).ready(function(){
console.log("loaded")


function getResults() {
 $.ajax({
  type: "GET",
  url: "https://itunes.apple.com/lookup?id=909253",
  dataType: 'jsonp',
  data : { term: "", media: "music", entity: "album", limit: 25},
  success: function(data) {
    console.log(data.results[0].artistName)

  }
 })
}






var button = $('button#click-me')

button.on("click", getResults);

// button.on("click", function(){ var inputVal = $('input#itunes-search').val()
// console.log(inputVal)});








// function getResults (){

// var classItem = $('.item');
// classItem.remove()
// var inputBox = $("input#itunes-search");
// inputBox.keyup(function(){
//   var query = $(this).val();
//   console.log(query)

//   $.ajax({
//     type: "GET",
//     url: "https://itunes.apple.com/search",
//     dataType: "jsonp",
//     data : { term: query, media: "music", entity: "album", limit: 25},
//     success: function (data){
//       var result = data.results
//       console.log(result)
//       var $results = $('<ul>')
//       var $item, $thumbnail, $description, $artist, $album, $price;
//       console.log($results)
//       result.forEach(function(tune){
//         $item = $('<li></li>');
//         console.log($item)
//         $thumbnail = $('<img>');
//         console.log($thumbnail)
//         $description = $('<div>');
//         console.log($description);
//         $artist = $('<p>');
//         console.log($artist)
//         $album = $('<p>');
//         console.log($album)
//         $price = $('<p>');
//         console.log($price);
//         $item.addClass("item");
//         console.log($item)
//         $thumbnail.addClass("albumCover");
//         console.log($thumbnail)
//         $artist.addClass("album");
//         console.log($artist)
//         $price.addClass("price");
//         console.log($price)

//         $thumbnail.attr("src", tune.artworkUrl100);
//         console.log($thumbnail.attr("src"))
//         $artist.text(tune.artistName);
//         $album.text(tune.collectionCensoredName);
//         $price.text(tune.collectionPrice);
// // ERROR IS LIKELY WITH APPEND TO
//         $artist.appendTo($description);
//         console.log($description)
//         $album.appendTo($description);
//         console.log($description)
//         $price.appendTo($description);
//         console.log($description)

//         $description.appendTo($item);
//         $thumbnail.appendTo($item);
//         $item.appendTo($results);









//       })
//       var $body = $('body');

//       $results.appendTo($body)
//       console.log($body)

//     }

//   })
// })

// // AJAX CALL



// console.log("clicked")
// }

// var button = $('button#click-me');

// button.on("click", getResults)









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
