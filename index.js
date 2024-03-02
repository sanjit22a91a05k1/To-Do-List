document.getElementById('todoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            var todoInput = document.getElementById('todoInput');
            var todoText = todoInput.value.trim();
            if (todoText !== '') {
                addTask(todoText);
                todoInput.value = '';
            } else {
                alert('Please enter a task!');
            }
        });

        function addTask(taskText) {
            var listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox" class="mr-2">
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            listItem.querySelector('.delete-btn').addEventListener('click', function() {
                listItem.remove();
            });
            listItem.querySelector('input[type="checkbox"]').addEventListener('change', function() {
                if (this.checked) {
                    listItem.classList.add('completed');
                } else {
                    listItem.classList.remove('completed');
                }
            });
            document.getElementById('todoList').appendChild(listItem);
        }