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

var imgTag = $('img')
var nameLi = $('li').eq(0)
var userTitle = $('p#user_title')
var emailLi = $('li').eq(1)
var bdayLi = $('li').eq(2)
var addressLi = $('li').eq(3)
var passLi = $('li').eq(4)

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data){
    console.log(data.results[0])
    imgTag.attr('src', data.results[0].picture.large)
    userTitle.text('hello my name is ' + data.results[0].name.first)
    nameLi.mouseover(function(){
      userTitle.text('hello my name is ' + data.results[0].name.first)
    })

    emailLi.mouseover(function(){
      userTitle.text('My email is ' + data.results[0].email)
    })

    bdayLi.mouseover(function(){
      userTitle.text('My bday is on ' + data.results[0].dob.date)
    })

    addressLi.mouseover(function(){
      userTitle.text('My address is ' + data.results[0].location.city + " " + data.results[0].location.state)
    })

    passLi.mouseover(function(){
      userTitle.text('My password is ' + data.results[0].login.password)
    })
  }
})



























// ----------------------------------------3/31/20

// var userValue = $("p#user_value")
// var userTitle = $('p#user_title')
// var userPhoto = $('img')
// var liTags = $('li')
// var nameLi = liTags.eq(0)
// var emailLi = liTags.eq(1)
// var bDayLi = liTags.eq(2)
// var addressLi = liTags.eq(3)
// var passwordLi = liTags.eq(4)


// $.ajax({
//   type: "GET",
//   url: "https://randomuser.me/api/",
//   success: function(data) {
//     var shortData = data.results[0]
//     userValue.text(shortData.name.first + " " + shortData.name.last)


//     userPhoto.attr('src', shortData.picture.large)
//     nameLi.click(function(){
//       userTitle.text("Hello, My name is")
//       userValue.text(shortData.name.first + " " + shortData.name.last)
//     })
//     emailLi.click(function(){
//       userTitle.text("My email is:")
//       userValue.text(shortData.email)
//     })
//     bDayLi.click(function(){
//       userTitle.text("My birthday is")
//       userValue.text(shortData.dob.date)
//     })
//     addressLi.click(function(){
//       userTitle.text("My city is")
//       userValue.text(shortData.location.city)
//     })
//     passwordLi.click(function(){
//       userTitle.text("My password is:")
//       userValue.text(shortData.login.password)
//     })
//   }







// })



















// ------------------------------------------------------New Trial Starts Above

// $.ajax({
//   type: "GET",
//   url: "https://randomuser.me/api/",
//   success: function(data){
//     console.log(data)
//     // console.log(data.results[0].dob.date)
//     var img = $('img')
//     img.attr('src', data.results[0].picture.medium)
//     var titleParagraph = $('#user_title')
//     var userValue = $('#user_value')
//     userValue.text(data.results[0].name.first + " " + data.results[0].name.last)
//     var nameLi = $('li').eq(0)
//     nameLi.on('mouseover', function(){
//       userValue.text(data.results[0].name.first + " " + data.results[0].name.last)
//       titleParagraph.text('Hello, My name is ')


//     })
//     var emailLi = $('li').eq(1)
//       emailLi.on('mouseover', function(){
//         var titleParagraph = $('#user_title')
//         titleParagraph.text('My email is ')
//         userValue.text(data.results[0].email)

//       })
//     var birthdayLi = $('li').eq(2)
//       birthdayLi.on('mouseover', function(){
//         titleParagraph.text("My birthday is ")
//         userValue.text(data.results[0].dob.date)
//       })
//     var addressLi = $('li').eq(3);
//       addressLi.on('mouseover', function(){
//         titleParagraph.text("My address is ")
//         userValue.text(data.results[0].location.street)
//       })
//     var passwordLi = $('li').eq(4);
//       passwordLi.on('mouseover', function(){
//         titleParagraph.text("My password is ")
//         userValue.text(data.results[0].login.password)
//       })



//   }
// })










// END END END
})
