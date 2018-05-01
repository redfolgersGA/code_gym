$(document).ready(function(){
console.log("script unloaded sike")

var $inputBox = $('input#city_entered')



$.ajax({
  type: "GET",
  url: "",
  success: function(data){
    console.log(data.main.temp)
  }


})













});
