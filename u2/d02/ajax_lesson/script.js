$(document).ready(function(){


console.log('jsloaded')
// function turnPTagsRed(){
//   var pTag = document.getElementById('p-tag')
//   console.log(pTag)
//   pTag.style.color = "red"
// }

// turnPTagsRed()

// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: randomData

// });

// function randomData(data){
//   console.log(data.results[0].name)
//   var $imgTag = $('img')
//     $imgTag.attr("src", data.results[0].picture.medium)

//     var $userTitle = $('p#user_title')
//     var $nameLi = $('li').eq(0)
//     $nameLi.on("mouseover", function(){
//       $userTitle.text("Hi, my name is " + data.results[0].name.first)
//       console.log('hovered')
//     })


// }




$.ajax({
  type: "GET",
  url: "https://randomuser.me/api/",
  success: function(data){
    console.log(data.results[0])
    var img = $('img')
    img.attr('src', data.results[0].picture.medium)
    var titleParagraph = $('#user_title')
    var userValue = $('#user_value')
    userValue.text(data.results[0].name.first + " " + data.results[0].name.last)
    var nameLi = $('li').eq(0)
    nameLi.on('mouseover', function(){
      userValue.text(data.results[0].name.first + " " + data.results[0].name.last)
      titleParagraph.text('Hello, My name is ')


    })
    var emailLi = $('li').eq(1)
      emailLi.on('mouseover', function(){
        var titleParagraph = $('#user_title')
        titleParagraph.text('My email is ')
        userValue.text(data.results[0].email)

      })




  }
})










// END END END
})
