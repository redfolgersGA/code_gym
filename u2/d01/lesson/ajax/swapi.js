$(document).ready(function(){
  var first_film_url = "http://swapi.co/api/films/1/";

$.ajax({
  "url": first_film_url,
  "method": "GET",
  "success": function(data) {
    console.log(data);
     $.ajax({
       "url": data.starships[6],
        "method": "get",
         "success": function(shipData){
           console.log(shipData);
           $.ajax({
             "url": shipData.pilots[2],
              "method": "get",
               "success": function(pilotData) {
                 console.log(pilotData);
                var container = $('#titles #titlecontent p');
                container.text(JSON.stringify(pilotData));

            }
          })//ends shipData[6].pilots[2] getz
        }
      })// ends starships[6] get

  }//ends success
})
});

---------------------------------------------------------------------
//same as above but done with promises

var first_film_url = "http://swapi.co/api/films/1/";
  var data_logger = function(data) {
    console.log(data);
  }

  var initial_request = function() {
    return $.ajax({
      "url": first_film_url,
        "method": "get"
         })
  }

  var starShipRequest = function(data) {
    return $.ajax({
     "url": data.starships[6],
      "method": "get"
  })
  }

intial_request()
 .then(starshipRequest)
 .then(data_logger);








