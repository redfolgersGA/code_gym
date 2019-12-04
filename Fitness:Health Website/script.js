console.log("js linked")
var userValue = $("p#user_value")
var userTitle = $('p#user_title')
var userPhoto = $('img')
var liTags = $('li')
var nameLi = liTags.eq(0)
var emailLi = liTags.eq(1)
var bDayLi = liTags.eq(2)
var addressLi = liTags.eq(3)
var passwordLi = liTags.eq(4)


$.ajax({
  type: "GET",
  url: "https://randomuser.me/api/",
  success: function(data) {
    var shortData = data.results[0]
    userValue.text(shortData.name.first + " " + shortData.name.last)


    userPhoto.attr('src', shortData.picture.large)
    nameLi.click(function(){
      userTitle.text("Hello, My name is")
      userValue.text(shortData.name.first + " " + shortData.name.last)
    })
    emailLi.click(function(){
      userTitle.text("My email is:")
      userValue.text(shortData.email)
    })
    bDayLi.click(function(){
      userTitle.text("My birthday is")
      userValue.text(shortData.dob.date)
    })
    addressLi.click(function(){
      userTitle.text("My city is")
      userValue.text(shortData.location.city)
    })
    passwordLi.click(function(){
      userTitle.text("My password is:")
      userValue.text(shortData.login.password)
    })
  }







})

