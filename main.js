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