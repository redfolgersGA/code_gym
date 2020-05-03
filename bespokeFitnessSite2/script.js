$(document).ready(function(){
  $.ajax({
  url: "https://www.instagram.com/fidgetfettle/",
  type: "GET",
  success: function(data){
    var titleStr = data.search('<title>')
    console.log(data[193])
  }
})











})








// console.log('js loaded')


