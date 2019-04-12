$(document).ready(function(){
console.log("loaded")


function getResults() {
  var classItem = $('.item');
  classItem.remove()
 $.ajax({
  type: "GET",
  url: "https://itunes.apple.com/lookup?id=909253",
  dataType: 'jsonp',
  data : { term: "", media: "music", entity: "album", limit: 25},
  success: function(data) {
  // result is an array
  var result = data.results;
  console.log(result)
  $results = $('<ul>');

  var $item, $thumbnail, $description, $artist, $album, $price;
  var $body = $('body')


  // Use a forEach method to iterate over all of the result items and then do
  // the following in the for loop:

  result.forEach(function(item){
    var $item = $('<li></li>')
    var $thumbnail = $('<img>')
    var $description = $('<div></div>')
    var $artist = $('<p></p>')
    var $album = $('<p></p>')
    var $price = $('<p></p>')

    $item.addClass('item')
    $thumbnail.addClass('albumCover')
    $artist.addClass('artist')
    $album.addClass('album')
    $price.addClass('price')

    $thumbnail.attr('src', result[1].artworkUrl100)
    $artist.text(result[0].artistName)
    console.log($artist.text())
    $album.text(result[1].collectionName)
    $price.text(result[1].collectionPrice)

    $description.append($artist)
    $description.append($album)
    $description.append($price)



    $item.append($thumbnail)
    $item.append($description)


    $results.append($item)


  })
  $body.append($results)

  //   - USING JQUERY, create a 'li' element and store it in '$item',
  //   create a '<img>' element and store it in '$thumbnail', create
  //   a '<div>' element and store it in $decription, and create '<p>'
  //   elements and store them in $artist, $album, $price
  //   - Add a class of 'item' to '$item'
  //   - Add a class of 'albumCover' to '$thumbnail'
  //   - Add a calss of 'artist' to '$artist'
  //   - Add a class of 'album' to '$album'
  //   - Add a class of 'price' to '$price'
  //   - Find where the thumbnail image is being stored in the result
  //   object and then set the '$thumbnail's src attribute to it
  //   - Find where the artist's name is being stored in the object
  //   and set artist text to that, do the same for the album and price
  //   - Append $artist, $album, $price to $description
  //   - Append $thumbmail and $desciption to $item
  //   - Append $item to $results
  //  - End forEach method
  //  - Append $results to $body
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
