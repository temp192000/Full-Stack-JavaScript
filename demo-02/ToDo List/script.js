let newTask = document.getElementById('newTask');
let btnAddTask = document.getElementById('btn-addTask');
let taskList = document.getElementById('taskList');

btnAddTask.onclick = function addTask(){
    taskList.innerHTML += "<li>" + newTask.value + "</li>";
}

function populate(){
    let start = Date.now();
    for(let i = 0; i < 100; i++){
        taskList.innerHTML = taskList.innerHTML + "<li>" + i + "</li>";
        // taskList.innerHTML += "<li>" + newTask.value + "</li>";
    }
    console.log(Date.now() - start)
}