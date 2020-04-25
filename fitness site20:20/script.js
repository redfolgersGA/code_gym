$("document").ready(function() {
      // The DOM is ready!
      // The rest of your code goes here!

console.log("loaded")

var button = $('.btn')
var imgTag = $('<img>')
var body = $('body')
var imgAppDiv = $('div.image-app')


// button.forEach((element) => {
//   console.log(button)
// })


$.ajax({
  type: "GET",
  url: "https://api.unsplash.com/search/photos?query=london&client_id=fd3a0df49a50671219e0d45a54a90bd2d7ceaed84ab174c197280e5c03605232",
  dataType: "json",

  success: function(data){


    var rando = Math.floor(Math.random() * (data.results.length + 1 - 0) + 0)
    console.log(rando)

    imgTag.attr('src', data.results[rando].urls.raw)
    imgAppDiv.append(imgTag)

    for(var i=0;i<data.results.length;i++){
      console.log(data.results[i].urls.raw)
    }




  }
})




  });
