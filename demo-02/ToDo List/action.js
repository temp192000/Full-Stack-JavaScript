let newTask = document.getElementById('newTask');
let btnAddTask = document.getElementById('btn-addTask');
let taskList = document.getElementById('taskList');

btnAddTask.onclick = function(){
    const newItem = document.createElement('li');
    newItem.textContent = newTask.value;
    taskList.appendChild(newItem);
}

function populate(){
    let startTime = Date.now()
    for(let i = 0; i < 10; i++){
        const newItem = document.createElement('li');
        newItem.textContent = i;
        taskList.appendChild(newItem);            
    }
    console.log(Date.now() - startTime);
}