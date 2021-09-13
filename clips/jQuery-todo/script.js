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
    toggleBtns();
}

function clearDone(){
    $('#ulTasks .done').remove();
    toggleBtns()
}

function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}

function toggleBtns(){
    btnReset.prop('disabled', inpNewTask.val() == '');
    btnAdd.prop('disabled', inpNewTask.val() == '');
    btnSort.prop('disabled', ulTasks.children().length < 1);
    btnClean.prop('disabled', ulTasks.children().length < 1);
}


inpNewTask.keypress((e) => {
    if(e.which == 13){
        addItem();
    }
})

inpNewTask.on('input', toggleBtns)

btnAdd.click(addItem);

btnReset.click(() => {
    inpNewTask.val("");
    toggleBtns();
});

btnSort.click(sortTasks);
btnClean.click(clearDone);