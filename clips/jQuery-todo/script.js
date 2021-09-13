let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let inpNewTask = $('#inpNewTask');

btnAdd.click(() => {
    let listItem = $('<li>', {
        'class':'list-group-item',
        text: inpNewTask.val()
    })

    //pointer-events: none
    // listItem.click(() => {
    //     listItem.toggleClass('disabled');
    // })

    listItem.click(() => {
        listItem.toggleClass('done');
    })

    ulTasks.append(listItem);
});

btnClear.click(() => {
    inpNewTask.val("");
});