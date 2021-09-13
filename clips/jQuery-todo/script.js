let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnClean = $('#btnClean')
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

function clearDone(){
    $('#ulTasks .done').remove();
}

inpNewTask.keypress((e) => {
    if(e.which == 13){
        addItem();
    }
})

btnAdd.click(addItem);
btnReset.click(() => inpNewTask.val(""));
btnClean.click(clearDone);