let ulTasks = $('#ulTasks');
let inpNewTask = $('#inpNewTask');

let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnClean = $('#btnClean');
let btnSort = $('#btnSort');

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

function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}

inpNewTask.keypress((e) => {
    if(e.which == 13){
        addItem();
    }
})

btnAdd.click(addItem);
btnReset.click(() => inpNewTask.val(""));
btnSort.click(sortTasks);
btnClean.click(clearDone);