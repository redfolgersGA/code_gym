console.log('script.js is loaded')

var test = "jquery is loaded"

var body = $('body')

body.append("<p>" + test + "</p>")

// send a request to the file path you created with EXPRESS app

$.ajax({
  type: "GET",
  url: "/api/npmPackages",
  success: function(data){
    console.log(data)

    body.append("<h1>" + data.title + "</h1>")
    body.append("<h3>" + data.text + "</h3>")

    data.packages.forEach(function(package){
      var divForPackage = $('<div></div>')
      var h5ForName = $('<h5></h5>')
      var pForCat = $('<p></p>')
      var imgForImg = $('<img>')

      h5ForName.text(package.name)
      pForCat.text(package.category)
      imgForImg.attr('src', package.img)

      divForPackage.append(h5ForName)
      divForPackage.append(pForCat)
      divForPackage.append(imgForImg)

      body.append(divForPackage)



    })
  }
})
