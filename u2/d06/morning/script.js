$(document).ready(function(){
  console.log("loaded");
  var $body = $('body');

  $('button').click(function getResults(){
  $('body').removeClass('item');


  })

  // getResults function goes here
  function getResults(){
    $('body').removeClass('item');
  }

  // Event Handlers go here

$.ajax({
url: 'https://itunes.apple.com/search',
method: 'GET',
data : { term: query, media: "music",entity: "album",limit: 25}
success: function(data) {
  result = data.results;
  $results = $('<ul>');
  var $item, $thumbnail, $description, $artist, $album, $price;
  ul.forEach()
}
})


});

$.ajax({
  url:
  type:
  data:
  success:
  error:
})
