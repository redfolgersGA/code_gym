console.log('Js linked')

// Step 1 assign all elements

const demoId = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demo');
const demoTag = document.getElementsByTagName('article');
const demoQuery = document.querySelector('#demo-query');
const demoQueryAll = document.querySelectorAll('.demo-query-all');

// change border of ID demo to purple

demoId.style.border = '1px solid purple'

// change border of class demo to orange

for (i=0; i <demoClass.length; i++) {
  demoClass[i].style.border = '1px solid orange'
}
