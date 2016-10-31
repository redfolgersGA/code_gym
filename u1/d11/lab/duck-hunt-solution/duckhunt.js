jQuery(function() {
  var game_start = new Audio('/audio/start-round.mp3');
  game_start.play();

  var body = $('body');

  // 6. Defines a createDuck function that returns a duck
  function createDuck() {
    // 1. Creates a <div> with the class "duck" named "duck"
    var duck = $('<div class="duck"></div>');
    body.append(duck);

    // 2. Toggles the "flap" class on the duck every 250 ms (1/4 second)
    setInterval(function() {
      duck.toggleClass('flap');
    }, 250)

    // 8a. Moves the newly created duck to a random location
    duck.css("top", Math.random() * window.innerHeight);
    duck.css("left", Math.random() * window.innerWidth);

    // 8b. Moves the duck to a new location after 1 second
    // 9. Ducks keep moving by using setInterval instead of setTimeout
    setInterval(function() {
      duck.css("top", Math.random() * window.innerHeight);
      duck.css("left", Math.random() * window.innerWidth);
    }, 2000)

    // 11. Attaches a "click" handler that adds the "shot" class to the duck
    duck.on("click", function() {
      duck.addClass("shot");
      // 12. Removes the duck from the DOM after a short delay
      setTimeout(function() {
        duck.remove();
        checkForWinner();
      }, 1000)
    })

    return duck;
  }

  // 13. Checks the DOM for ducks and says "YOU WIN" if all the ducks are gone
  function checkForWinner() {
    if ($('.duck').length === 0) {
      alert("You Win!");
    }
  }

  // 7. Creates 5 ducks
  for(var i=0; i<5; i++) {
    createDuck();
  }

  // 10. ------ We're almost there! ------

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. You win 1 trillion tokens.  Play the day away!

})
