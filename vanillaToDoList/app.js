// selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


// event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)


// functions

function addTodo(event){
  // prevents form from submitting
  event.preventDefault()
  console.log('hello')
  // todo div
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")
  // create li
  const newTodo = document.createElement("li")
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)
  // check mark button
  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class="fas fa-check"> </i>'
  completedButton.classList.add('complete-btn')
  todoDiv.appendChild(completedButton)
  // check trash button
  const trashButton = document.createElement('button')
  trashButton.innerHTML = '<i class="fas fa-trash"> </i>'
  trashButton.classList.add('trash-btn')
  todoDiv.appendChild(trashButton)
  // append to list
  todoList.appendChild(todoDiv)
  // clear todo input value
  todoInput.value=""
}

function deleteCheck(e){
  const item = e.target
  console.log(item)

  // delete todo
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    //  animation
    todo.classList.add("fall")
    todo.addEventListener('transitionend', function(){
      todo.remove()

    })

  }
  // check mark
  if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement
    todo.classList.toggle("completed")
  }
}

// API calls
$.ajax({
  type: "GET",
  url: "https://api.edamam.com/api/food-database/parser?ingr=banana
  success: function(data){
    console.log(data)
  }
})



