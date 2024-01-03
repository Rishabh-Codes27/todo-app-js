// const taskInput = document.getElementById("taskInput");
// const addButton = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");

// // get text from the input field
// addButton.addEventListener("click", function () {
//   const taskText = taskInput.ariaValueMax.trim();

//   //check if task is not empty
//   if (taskText != " ") {
//     //creating a new list item
//     const listItem = document.createElement("li");

//     //creating a span for the task text
//     const taskSpan = document.createElement("span");
//     taskSpan.content = taskText;
//     taskSpan.classList.add("taskText");

//     //creating delete button
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("deleteBtn");
//     listItem.appendChild(taskSpan);
//     listItem.appendChild(deleteBtn);

//     // append the list item to the task list
//     taskList.appendChild(listItem);

//     //clear the input field
//     taskInput.value = "";
//   }
// });

// taskList.addEventListener('click', function(event) {
//     if (event.target.classList.contains('deleteBtn')) {
//         // Get the parent list item and remove it from the task list
//         const listItem = event.target.parentNode;
//         taskList.removeChild(listItem);
//     }
// });

//perplexity ai code

// Initialize the todo list and its elements
const todoList = document.getElementById('taskList');
const addButton = document.getElementById('addBtn');
const inputField = document.getElementById('taskInput');

// Function to add a new task
function addTask() {
  const newTask = document.createElement('li');
  newTask.textContent = inputField.value;
  todoList.appendChild(newTask);
  newTask.classList.add('task-text')
  inputField.value = '';

  // Add a 'delete' button and a 'complete' button to each task
  newTask.addEventListener('click', function() {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteBtn')
    deleteButton.addEventListener('click', function() {
      todoList.removeChild(newTask);
    });

    newTask.appendChild(deleteButton);

    // const completeButton = document.createElement('button');
    // completeButton.textContent = 'Complete';
    // completeButton.classList.add('completeBtn')
    // completeButton.addEventListener('click', function() {
    //   newTask.style.textDecoration = 'line-through';
    // });

    newTask.appendChild(completeButton);
  });
}

// Function to handle key presses on the input field
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}

// Add event listeners
addButton.addEventListener('click', addTask);
inputField.addEventListener('keydown', handleKeyPress);