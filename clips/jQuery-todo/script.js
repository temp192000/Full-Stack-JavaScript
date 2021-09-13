let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let inpNewTask = $('#inpNewTask');

function addItem(){
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
}


inpNewTask.keypress((e) => {
    if(e.which == 13){
        addItem();
    }
})

btnAdd.click(addItem);
btnClear.click(() => inpNewTask.val(""));