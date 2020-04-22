console.log('script.js is loaded')

var test = "jquery is loaded"

var body = $('body')

body.append("<p>" + test + "</p>")

// send a request to the file path you created with EXPRESS app

$.ajax({
  type: "GET",
  url: "/api/npmPackages",
  success: function(data){
    console.log(data.packages)

    body.append("<h1>" + data.title + "</h1>")
  }
})
