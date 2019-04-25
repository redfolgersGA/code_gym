$(document).ready(function() {
    // all custom jQuery will go here


console.log("Youre here again for the third damn time")

// var npmPackages = {

//     title: "Popular NPM Frameworks",
//     text: "These are the most popular frameworks",

//     packages: [
//       {
//         name: "Express",
//         category: "Server-side Framework",
//         img: "https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67"
//       },
//       {
//         name: "Gulp",
//         category: "Build System",
//         img: "http://maxcdn.webappers.com/img/2014/01/gulp-js.jpg"
//       },
//       {
//         name: "Mocha",
//         category: "Testing Framework",
//         img: "https://s3.amazonaws.com/dailyjs/images/posts/mocha-tests.png"
//       },
//       {
//         name: "React",
//         category: "Front-end Framework",
//         img: "http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
//       },
//       {
//         name: "Passport",
//         category: "Authentication Tool",
//         img: "https://pbs.twimg.com/profile_images/599259952574693376/DMrPoJtc.png"
//       },
//       {
//         name: "PG Promise",
//         category: "Promises Interface for PostgeSQL Database",
//         img: "https://securedb.co/wp-content/uploads/2015/07/worlds-most-advanced-open-source-database-securedb-encyrption-as-a-service.gif"
//       }
//     ]
// }


function languageAjaxCall (){

  $.ajax({
    url: "/api/languages",
    type: "GET",
    success: function(data) {
        var body = $('body')
        var h1 = $("<h1></h1>")
        var h3 = $("<h3></h3>")
      data.programmingLanguages.forEach(function(item){
        // if()

        // if there is anything already on the DOM remove it
        // add image property to language object located in app.js
        var newDiv = $("<div></div>")
        var newh5 = $("<h5></h5>")
        var newp = $("<p></p>")

        newh5.text(item.name)
        newDiv.append(newh5)

        newp.text(item.description)
        newDiv.append(newp)

        console.log(item)

        body.append(newDiv)






      })


    }
  })


}

var languageButton = $('#languageButton')



languageButton.on("click", languageAjaxCall)


$.ajax({
  url: "/api/npmPackages",
  type: "GET",
  success: function(data){
    console.log(data.title)
    var body = $('body')
    var h1 = $("<h1></h1>")
    var h3 = $("<h3></h3>")


    h1.text(data.title)
    body.append(h1)

    h3.text(data.text)
    body.append(h3)

    data.packages.forEach(function(item){
      var newDiv = $("<div></div>")
      var newh5 = $("<h5></h5>")
      var newp = $("<p></p>")
      var img = $("<img>")
      console.log(item)
      console.log(img)

      newh5.text(item.name)
      newDiv.append(newh5)
      newp.text(item.category)
      newDiv.append(newp)
      img.attr("src", item.img)
      newDiv.append(img)

      newDiv.attr("class", "npmPackages")




      body.append(newDiv)
    })


  }

})

});

var removeButton = $("#removeButton")

removeButton.on("click", function(){
  // this if statement should remove the .npmPackages when language button is clicked, modify for this functionality
  var div = $(".npmPackages")
  if(div){
    div.remove()
  }
})



