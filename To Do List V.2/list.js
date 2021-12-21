'use strict';

//Global Variables
const form = document.getElementById('inputForm')
const input = document.getElementById('userInput')
const button = document.getElementById('addButton')
const alert = document.getElementById('alert')
const ul = document.querySelector('.tasks')
const clearButton = document.getElementById('clearButton')


const addTask = function(task){
  if(input.value.length === 0) {
    input.placeholder = "Enter Valid Input";
    setTimeout(() => {
      alert.style.display = 'block';
    }, 2000)
    clearInterval();
  } else {
    let li = document.createElement('li')//Creates an 'li' element
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li)
    input.value="";
    alert.style.display = 'none';
    input.placeholder = 'Enter Another Task';
    
    
    //Delete Button
let deleteBtn = document.createElement('button');
deleteBtn.appendChild(document.createTextNode('X'))
li.appendChild(deleteBtn);
deleteBtn.classList.add('deleteButton')
deleteBtn.addEventListener('click', deleteListItem)

//Add a delete class
function deleteListItem() {
  li.classList.add('delete')
}
    
 li.addEventListener('click', function() {
   li.style.backgroundColor = 'green';
   li.style.textDecoration = 'line-through';
 })

  }
}


//Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault(),
    addTask(input.value)
})



function addTaskKeypress(event) {
  if(event.which === 13) {
    addTask(input.value)
  }
}

clearButton.addEventListener('click', function() {
  ul.innerHTML = ''
})
