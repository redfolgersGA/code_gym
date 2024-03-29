

![clock](http://i.giphy.com/IZcjxKQNbOOly.gif)


## Homework - Clocks!
_**cue Coldplay**_

Today you are going to build a Javascript clock!

Start by planning! Draw a clock, break down the problem.

Work in `clock.js` and test your work in the browser.

In `clock.js`, you're going to write a method called `clock()`.

Then you're going to register an event listener to `window`, that fires `clock()` when the page loads.

#### Objectives
- Practice using JavaScript and jQuery to manipulate the DOM
- Practice using JavaScript Timers (_Hint: setInterval()_)

## Completion
Finish all the way through step 5

## Setup
Your `index.html` and `style.css` are already provided for you. All of your work will be done in your `clock.js` file.

### Step 1
Define 3 variables and grab the associated element from the DOM using JavaScript:
- minuteHand
- secondHand
- hourHand

### Step 2
- In order to rotate each hand, you will have to utilize the css attribute [`transform - rotate`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#rotate).
- Practice setting the angle of any hand in the console using the DOM method `style`, just to see if you can get the hands spinning.

### Step 3
- Use `setInterval` to make the `secondHand` complete full rotation in 60 seconds.
- The time interval you choose should factor into the calculation of degrees.

### Step 4
- Make the minute hand make a full rotation in 1 hour - (decrease the length of each setInterval time if you want to see your clock move more quickly).

### Step 5
- Make the hour hand make a full rotation in 12 hours

### BONUS

### Step 6
- How would you sync up your clock with the current time? Take a look at JavaScript's [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object
- Think about how you can change the time interval to make the second hand move more smoothly.
