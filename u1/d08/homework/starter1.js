/*PSEUDO CODE


1) There these spaces on the page. everytime you pass one of these spaces the
spaces turn the color green.

2)When you the space that youre on the space turns back
to it's normal color.

3)if you decide to tap the space that youre in the space will turn green
regardless of whether or not you leave the space.

4)If you tap all of the spaces green then a helicopter emerges in the sky and drops
down the message 'congratulations' on a banner.*/ /*
------------------------------------------------------------------------------
NOTE:
also due to my terrible
state of ineptitude i referenced my classmates submitted work on github and
googled each piece
of code that they used in order to understand how their code works. I also provided
explanations of how i understand the code to work to guide my thinking.

so if my code
looks like a patchwork of everyone else's its because i used their work to feed my
understanding. i hope it's ok that i do this. its very insightful for me.*/


console.log('u01d09 hw starter.js linked');


//I created a variable called boxes to house this function that selects
//all of the elements called zone.
var boxes = document.querySelectorAll('.zone')

//the console will log the contents of the variable boxes which now contains all
//the elements that are of the class zone( the . denotes this type of element is
//a class element)
console.log(boxes)

//Adds a new attribute or changes the value of an existing attribute on
//the specified element. Returns undefined.


//the for loop was used to "iterate" over each item in the variable boxes


/*var i works as an initiliazer to get the for loop going through the data
the next component of the for loop is the condition. In this case as long as i is less
than boxes.length the for loop will keep going through the data and adding 1 to my
i variable. boxes.length is a function that finds the length of my variable boxes.
since boxes has four items in it this value is equal to 4. because of this my for loop
will stop when it has run 4 times. once four each item in my variable boxes i guess.*/
for (var i =0; i < boxes.length; i++) {

  /*the second part of the for loop will take boxes and give it an Event to listen for.
  esentially all the boxes will now have a listener attached to them and will activate
  when the event happens. the function will take 'this' which I THINK is the boxes variable
  and the class.List.add is a way of using the DOM to change node properties
  in this case classList will add green to "this", which is the boxes variable,
  when the onmouseenter EVENT occurs! */
  boxes[i].onmouseenter = function() {
    this.classList.add('green');
  }

  /* this does EXACTLY what the above block of code does EXCEPT now the boxes are
  listening for the onmouseout EVENT and will trigger classList to remove green
  from the elements inside the variable boxes*/
  boxes[i].onmouseout = function() {
    this.classList.remove('green');
  }}


  boxes[i].onclick = function() {
    this.setAttribute('style', 'font-size: 10px');


//code goes here
