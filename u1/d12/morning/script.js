var philosophers = [
  {
    name: "Frederick Nietzsche",
    language: "German",
    born: "1844",
    works: ["The Birth of Tragedy", "Beyond Good and Evil", "On the Genealogy of Morality"],
    famousLine: "'When you look into an abyss, the abyss also looks into you.'",
    school: "Continental Philosophy",
    influencedBy: ["William Shakespeare", "Arthur Schopenhauer"],
    img: "http://thisiscommonsense.com/wp-content/uploads/2015/11/image11.jpg"
  },
  {
    name: "Aristotle The Great",
    language: "Greek",
    born: "384 BC",
    works: ["The Categories", "Metaphysics", "Nicomachean Ethics"],
    famousLine: "'It is the mark of an educated mind to be able to entertain a thought without accepting it.'",
    school: "Aristotelianism",
    influencedBy: ["Plato", "Socrates"],
    img: "http://www.thefamouspeople.com/profiles/images/aristotle-17.jpg"
  },
  {
    name: "Georg Wilhelm Friedrich Hegel",
    language: "German",
    born: "1770",
    works: ["The Phenomenology of Spirit", "Elements of the Philosophy of Right", "The Science of Logic"],
    famousLine: "'The history of the world is none other than the progress of the consciousness of freedom.'",
    school: "Absolute Idealism",
    influencedBy: ["Rousseau", "Spinoza"],
    img: "https://i.imgur.com/0rXaRzQ.png"
  },
  {
    name: "Simone de Beauvoir",
    language: "French",
    born: "1908",
    works: ["The Second Sex", "The Mandarins", "She Came to Stay"],
    famousLine: "'One's life has value so long as one attributes value to the life of others, by means of love, friendship, indignation and compassion.'",
    school: "Existentialism",
    influencedBy: ["Husserl", "Descartes"],
    img: "http://www.alcoberro.info/imatges/beauvoir.jpg"
  },
  {
    name: "Martin Heidegger",
    language: "German",
    born: "1889",
    works: ["Being & Time", "Poetry, Language, and Thought", "The Question Concerning Technology"],
    famousLine: "'Thinking begins only when we have come to know that reason, glorified for centuries, is the stiff-necked adversary of thought.'",
    school: "Phenomenology",
    influencedBy: ["Aristotle", "Nietzsche"],
    img: "http://www.prospectmagazine.co.uk/wp-content/uploads/2014/03/heidegger-crop.jpg"
  }
];

$(document).ready(function() {

  console.log('script loaded');

// var $inputBox = $('input');

// $("input").submit(function( event) {
//   console.log(input);

// var inputBox = $('input')
// var boxValue = inputBox.val()
// var button = $('button#inputSubmit')


// console.log(boxValue)


// button.on('click', function(){
//   console.log('clicked')
// })

var button = $('button#inputSubmit')
var nietzsche = philosophers[0]
var aristotle = philosophers[1]
var hegel = philosophers[2]
var beauvoir = philosophers[3]
var heidegger = philosophers[4]

button.click(function(){
  var input = $('input').val()
  var img = $('img')
  var nameText = $('h2.name')
  var school = $('p.school')
  var quote = $('p.quote')


  if(input === 'hegel'){
    img.attr('src', hegel.img)
    nameText.text(hegel.name)
    school.text(hegel.school)
    quote.text(hegel.famousLine)
  }

  if(input === 'nietzsche'){
    img.attr('src', nietzsche.img)
    nameText.text(nietzsche.name)
    school.text(nietzsche.school)
    quote.text(nietzsche.famousLine)
  }
})


















// --------------------------------------------------------------- NEW SESSION 11/18/19

// var $button = $("#inputSubmit");

//   $button.click(function(){
//     console.log("clicked!");
//     var $userName = $("input").val();
//     console.log($userName);


//   if($userName === 'hegel') {

//     $('img').attr('src', philosophers[0].img)
//     $('.name').text(philosophers[2].name)
//     $('.school').text(philosophers[2].school)
//     $('.quote').text(philosophers[2].famousLine)
//   }

//   if($userName === 'aristotle') {
//     $('img').attr('src', philosophers[1].img)
//     $('.name').text(philosophers[1].name)
//     $('.school').text(philosophers[1].school)
//     $('.quote').text(philosophers[1].famousLine)
//   }

//   if($userName === 'simone') {
//     $('img').attr('src', philosophers[3].img)
//     $('.name').text(philosophers[3].name)
//     $('.school').text(philosophers[3].school)
//     $('.quote').text(philosophers[3].famousLine)

//   }

//   if($userName === 'martin') {
//     $('img').attr('src', philosophers[4].img)
//     $('.name').text(philosophers[4].name)
//     $('.school').text(philosophers[4].school)
//     $('.quote').text(philosophers[4].famousLine)
//   }

//   if($userName === 'fred') {
//     $('img').attr('src', philosophers[0].img)
//     $('.name').text(philosophers[0].name)
//     $('.school').text(philosophers[0].school)
//     $('.quote').text(philosophers[0].famousLine)
//   }

//   var $userName = ""

//   })






















// END END END
});












