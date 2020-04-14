// selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const body = document.querySelector('body')
const imgTag1 = $('#image-1')




// // event listeners
// todoButton.addEventListener('click', addTodo);
// todoList.addEventListener('click', deleteCheck)


// // functions

// function addTodo(event){
//   // prevents form from submitting
//   event.preventDefault()
//   console.log('hello')
//   // todo div
//   const todoDiv = document.createElement("div")
//   todoDiv.classList.add("todo")
//   // create li
//   const newTodo = document.createElement("li")
//   newTodo.innerText = todoInput.value;
//   newTodo.classList.add('todo-item')
//   todoDiv.appendChild(newTodo)
//   // check mark button
//   const completedButton = document.createElement('button')
//   completedButton.innerHTML = '<i class="fas fa-check"> </i>'
//   completedButton.classList.add('complete-btn')
//   todoDiv.appendChild(completedButton)
//   // check trash button
//   const trashButton = document.createElement('button')
//   trashButton.innerHTML = '<i class="fas fa-trash"> </i>'
//   trashButton.classList.add('trash-btn')
//   todoDiv.appendChild(trashButton)
//   // append to list
//   todoList.appendChild(todoDiv)
//   // clear todo input value
//   todoInput.value=""
// }

// function deleteCheck(e){
//   const item = e.target
//   console.log(item)

//   // delete todo
//   if(item.classList[0] === 'trash-btn'){
//     const todo = item.parentElement;
//     //  animation
//     todo.classList.add("fall")
//     todo.addEventListener('transitionend', function(){
//       todo.remove()

//     })

//   }
//   // check mark
//   if(item.classList[0] === "complete-btn"){
//     const todo = item.parentElement
//     todo.classList.toggle("completed")
//   }
// }

// API calls
const searchBttn = $(".todo-button")

searchBttn.on("click", function(e){
  const foodQuery = $(".todo-input")
  const foodQueryValue = foodQuery.val()
  e.preventDefault()
  $.ajax({
  type: "GET",
  url: "https://api.edamam.com/api/food-database/parser?ingr="+foodQueryValue+"&",
  success: function(data){
    imgTag1.attr('src', data.parsed[0].food.image)
    imgTag1.css({"height": "200px"})

    foodQuery.val("")

    console.log(data)



    // img.attr('src', data.parsed[0].food.image)
    // imgDiv.append(img)
    // body.append(imgDiv)
    // console.log(data.parsed[0].food.image)
  }
})


})




