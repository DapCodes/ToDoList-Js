 const taskInput = document.getElementById('new-task');
        const addTaskButton = document.getElementById('add-task');
        const taskList = document.getElementById('task-list');

        
        function addTask() {
            //task teskText = taskInput  
            const taskText = taskInput.value;
            
            // mengecek isi dari taskInput
            if (taskText === '') {
                alert('Masukkan tugas baru!');
                return;
            }

           
            const taskItem = document.createElement('li');
            taskItem.classList.add('task');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-task">Hapus</button>
            `;

           
            taskItem.addEventListener('click', function () {
                taskItem.classList.toggle('completed');
            });

             
            taskItem.querySelector('.delete-task').addEventListener('click', function () {
                taskList.removeChild(taskItem);
            });

            
            taskList.appendChild(taskItem);

            
            taskInput.value = '';
        }

        
        addTaskButton.addEventListener('click', addTask);

        
        taskInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });