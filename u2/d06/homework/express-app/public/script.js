$(document).ready(function(){
console.log("ready");

$.ajax({
url: '/api/npmPackages',
method: 'GET',
success: function(data){
  console.log(data);
$('body').append('<h1>' + data.title)
$('body').append('<h3>'+ data.text)
data.packages.forEach(function(data){
$('body').append("<div><h5>"+ data.name + "</h5><p>" + data.category + "</p><img src=" + data.img + "></div>");
    })
}
})









});
