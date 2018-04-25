$(document).ready(function(){


console.log('jsloaded')
// function turnPTagsRed(){
//   var pTag = document.getElementById('p-tag')
//   console.log(pTag)
//   pTag.style.color = "red"
// }

// turnPTagsRed()

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: randomData

});

function randomData(data){
  console.log(data.results[0])
  var $imgTag = $('img')
    $imgTag.attr("src", data.results[0].picture.medium)


    var $nameLi = $('li').eq(0)
    $nameLi.on("mouseover", function(){
      $nameLi.text('hi')
      console.log('hovered')
    })


}















// END END END
})
