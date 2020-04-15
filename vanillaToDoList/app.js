// selectors
const foodLogInput = $('.foodLogInput')
const foodLogButton = $('.foodLogButton')
const foodLoggedDivContainer = $('.foodContainer')
const foodLoggedUlTag = $('.foodList')

foodLogButton.on('click', function(){
  type: "GET",
  url:




})
//   $.ajax({
//   type: "GET",
//   url: "https://api.edamam.com/api/food-database/parser?ingr="+foodLogInput.val()+"&nutrition-type=logging&app_id=e8f6cb8b&app_key=c04363f7864d5ed01cc4d1933f2cb2d8",
//   success: function(data){

// }
// )}

// })




// const todoInput = $('.todo-input')
// const todoButton = document.querySelector('.todo-button')
// const todoList = $(".todo-list")
// const body = document.querySelector('body')
// const imgTag1 = $('#image-1')




// event listeners
// todoButton.addEventListener('click', addTodo);
// todoList.addEventListener('click', deleteCheck)


// functions

// function addTodo(event){
//   // prevents form from submitting
//   event.preventDefault()
//   console.log('hello')
//   // todo div

// }

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
const searchBttn = $(".todo-button")

// searchBttn.on("click", function(e){
//   const foodQuery = $(".todo-input")
//   const foodQueryValue = foodQuery.val()
//   e.preventDefault()


//   const todoDiv = $("<div></div>")
//   todoDiv.addClass("todo")
//   // create li
//   const newTodo = $("<li></li>")
//   // IAM HERE
//   newTodo.text(foodQuery.val());
//   newTodo.addClass("todo-item")
//   todoDiv.append(newTodo)
//   // check mark button
//   // const completedButton = document.createElement('button')
//   // completedButton.innerHTML = '<i class="fas fa-check"> </i>'
//   // completedButton.classList.add('complete-btn')
//   // todoDiv.appendChild(completedButton)
//   // check trash button
//   // const trashButton = document.createElement('button')
//   // trashButton.innerHTML = '<i class="fas fa-trash"> </i>'
//   // trashButton.classList.add('trash-btn')
//   // todoDiv.appendChild(trashButton)
//   // append to list
//   todoList.append(todoDiv)




//     // img.attr('src', data.parsed[0].food.image)
//     // imgDiv.append(img)
//     // body.append(imgDiv)
//     // console.log(data.parsed[0].food.image)
//   }
// })


// })




