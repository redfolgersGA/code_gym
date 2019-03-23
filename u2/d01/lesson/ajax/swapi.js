$(document).ready(function(){
  var mainUrl = 'https://swapi.co/api/'
  var first_film_url = "https://swapi.co/api/films/1/";

$.ajax({
  type: "GET",
  url: first_film_url,
  success: function(data){
    console.log(data)
    $.ajax({
    type: "GET",
    url: first_film_url,
    success: function(data){
    console.log(data.starships[6])
      $.ajax({
      type: "GET",
      url: "https://swapi.co/api/starships/12/",
      success: function (data) {
      console.log(data.pilots[2])
      $.ajax({
      type: "GET",
      url: "https://swapi.co/api/people/18/",
      success: function (data) {
      var container = $('#titles #titlecontent p');
      container.text(JSON.stringify(data));
  }
})


    }
  })
  }
})
  }
})













// $.ajax({
//   type: "GET",
//   url: first_film_url,
//   success: function(data){
//     console.log(data)
//     var starwars = data
//   },

//   error: function(jqXHR, textStatus, error){
//     console.log(error)
//   }


// })

// $.get(first_film_url, function(data){
//   var xWing = data.starships[6]
//   $.get(xWing, function(xWingData){
//     var wedge = xWingData.pilots[2]
//     $.get(wedge, function(wedgeData){
//       console.log(wedgeData)
//       var $container = $('#titles #titlecontent p')
//        $container.text(JSON.stringify(wedgeData))
//     })
//   })
// })


});



// $.ajax({
//   "url": first_film_url,
//   "method": "GET",
//   "success": function(data) {
//     console.log(data);
//      $.ajax({
//        "url": data.starships[6],
//         "method": "get",
//          "success": function(shipData){
//            console.log(shipData);
//            $.ajax({
//              "url": shipData.pilots[2],
//               "method": "get",
//                "success": function(pilotData) {
//                  console.log(pilotData);
//                 var container = $('#titles #titlecontent p');
//                 container.text(JSON.stringify(pilotData));

//             }
//           })//ends shipData[6].pilots[2] getz
//         }
//       })// ends starships[6] get

//   }//ends success
// })
// });
//
// ---------------------------------------------------------------------
//same as above but done with promises

// var first_film_url = "http://swapi.co/api/films/1/";
//   var data_logger = function(data) {
//     console.log(data);
//   }

//   var initial_request = function() {
//     return $.ajax({
//       "url": first_film_url,
//         "method": "get"
//          })
//   }

//   var starShipRequest = function(data) {
//     return $.ajax({
//      "url": data.starships[6],
//       "method": "get"
//   })
//   }

// intial_request()
//  .then(starshipRequest)
//  .then(data_logger);








