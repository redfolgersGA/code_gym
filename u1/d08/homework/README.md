![](http://30.media.tumblr.com/tumblr_lm34yxL6Hb1qjgaaxo1_500.gif)

## Game of Zones

When you play the Game of Zones, you win, or ... well you don't die but you might not win. We're going to be building some interactive games using our new knowledge of EVENTS, compounding our previous knowledge of functions and JavaScript fundamentals.

## Setup

You've been provided starter code - no need to edit `index.html` or `style.css`, work only in `starter1.js` for Game 1 and `starter2.js` for Game 2.

Before coding, look through both games and their notes. Be sure to spend at least 15 minutes thinking about how to build the game out before actually touching ANY code.

Write out the logic of your game in pseudocode. Even if your pseudocode isn't perfect, it breaks down the problem into smaller steps to tackle and gives you a roadmap of how to proceed.

Put your pseudocode at the top of your javascript file and comment it out.

## Learning Objectives
 - Practice manipulating the DOM with javascript
 - Practice learning through documentation
 - Apply pseudocode to real coding problems

## Completion

Complete the first game, the second game is bonus
 - Write out pseudocode for the first game and include it at the top of the js file for starter 1 (comment it out).
 - Complete the code for the first game
 - Submit an issue to turn in the homework. Remember, more is better, but healthy living is best.

## Assignment

#### Game 1

What should a user be able to do with the game?

1. When the mouse enters any of the zones change its background color to `green`
2. When the mouse leaves a zone change its background color back
3. When you click on a zone it locks its color to green. HINT: You probably need to remove the hover event listeners, the `this` keyword we learned about might be helpful here! ([mdn](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener))
4. When all zones are checked green, log a statement of congratulations to the console!

Here's an example of how you can remove the hover event after a click (although there is more than one way to do this!)
``` js
var hobbits = document.querySelectorAll('.hobbit');

for (var i = 0; i < hobbits.length; i++){
  hobbits[i].onmouseover = function() {
    this.setAttribute('style', 'font-size: 100px');
  };

  hobbits[i].onmouseout = function() {
    this.setAttribute('style', 'font-size: 80px');
  };

  hobbits[i].onclick = function() {
    this.setAttribute('style', 'font-size: 10px');

    this.onmouseover = function() {
      //do nothing after clicked
    };

    this.onmouseout = function() {
      //do nothing after clicked
    };
  }
};
```

**Before coding anything, PSEUDOCODE out how to approach this game.** Here are some useful questions and notes for you:

- let's build a function that will turn a zone green. Can we do this with one function that will change any object with the function bound to it via an eventListener? (hint hint hint you the 'this' keyword from last week, might be super helpful!)
- take a look at `style.css`, we already have styles for a class 'green'. How might this change how you build the functions?
- what kind of event listeners do we need? Is there documentation out there for different types of event listeners?
- how would you add an event listener to one DOM element? How about to all DOM elements of a set (e.g. with the same class)
- how can you remove event listeners?
- which event listeners should be removed?
- when should those event listeners be removed?
- how can you check to see if all the zones are green?
- if you wrote a function to perform that check, when should the check occur?

![](http://i.imgur.com/BvvVElS.png)
## Bonus

#### Game 2

Modify your previous game so that the zones need to be clicked in a particular order. Copy any code you might want to reuse from Game 1 into `starter2.js`, and in `index.html`, switch `starter2.js` to be connected and `starter1.js` to be commented out.

1. Generate an array with the numbers `['zone-1', 'zone-2', 'zone-3', 'zone-4']` in a random order - you do not need some shuffling function, just randomize it by hand. This will determine the order in which you need to click the zones.
2. The zones start with no background color.
3. When you hover over a zone it should turn green if it is the next one that needs to be clicked and turn red if it is not.
4. When a correct zone is clicked it should stay green
5. Clicking on an incorrect zone should do nothing.
6. When all zones are green, log a statement of congratulations to the console!

**Before coding anything, PSEUDOCODE out how to approach this game.** Here are some new, useful questions and notes for you:

- what can we reuse from the previous game?
- how can we check if the zone is supposed the next one in the array?
- how can we stop something from happening if we only want an event to occur for a correct click?


# Mo Bonus
Let's revisit both games!

#### Game 1

- When all zones are checked green make them turn yellow after one second, red after another second, and then clear the background color after one last second. HINT: Look at [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)

#### Game 2

- Clicking an incorrect box should make it turn red for one second, then revert back to clear
- When all zones are green remove their backgrounds one by one, with a 1 second delay in between each, in the order that they were clicked (hint: the array!). Look at [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)!

## Resources
[onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)

[onmouseover](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover)

[onmouseout](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout)

[removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

[setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)

[setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)
