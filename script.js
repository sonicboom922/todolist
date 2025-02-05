document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('task-list');
      
      // Create a new list item (li)
      const li = document.createElement('li');
      li.innerHTML = `${taskText} <button class="remove">X</button>`;
      
      // Add the new task to the task list
      taskList.appendChild(li);
      
      // Clear the input field
      taskInput.value = '';
  
      // Add event listener to the remove button
      const removeButton = li.querySelector('.remove');
      removeButton.addEventListener('click', function() {
        taskList.removeChild(li);
      });
    }
  });
  