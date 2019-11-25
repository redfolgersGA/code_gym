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

var userName = $("p#user_value")
// var data = "data.results"
var userPhoto = $('img')


$.ajax({
  type: "GET",
  url: "https://randomuser.me/api/",
  success: function(data) {
    var shortData = data.results[0]
    userName.text(shortData.name.first + " " + shortData.name.last)
    userPhoto.attr('src', shortData.picture.large)
  }







})



















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
