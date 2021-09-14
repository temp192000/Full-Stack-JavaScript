// window.onload() and waits for the page to be rendered completely
$(() => {
    // console.log("Waits for the page to load!");
    let newTask = $('#newTask');
    let btnAdd = $('#btn-addTask');
    let ulList = $('#ul-taskList');

    btnAdd.click(() => {
        // $.post -> AJAX : Asynchronous JavaScript and XML
        $.post(
            '/taskmanager',
            {task: newTask.val()},
            (res) =>{
                // for of loop
                ulList.empty();
                for(item of res){
                    ulList.append(`<li>${item.task}</li>`)
                }
            }
        )
    })
})

// Global. Doesn't wait for anything, anybody. 
// Starts executing as soon as hits the client
// console.log("Logs before even the page is loaded!");