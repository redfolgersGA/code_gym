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
  success: function(data) {
    console.log(data.results[0]);

  }
});















// END END END
})
