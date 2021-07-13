let inTimeOutA = document.getElementById('inTimeOut-A')
let btnWaitA = document.getElementById('btnWait-A')
let btnCancelA = document.getElementById('btnCancel-A')

let inTimeOutB = document.getElementById('inTimeOut-B')
let btnWaitB = document.getElementById('btnWait-B')
let btnCancelB = document.getElementById('btnCancel-B')

function waitV2(timeout, done){
    if(isNaN(parseInt(timeout))){
        done(new Error('Time Out must be number.'));
    }else{
        setTimeout(() => {
            done(null)
        },timeout);
    }
}

btnWaitA.onclick = function(){
    waitV2(inTimeOutA.value, (err) => {
        if(err){
            console.error(err);
        }
        else{
            console.log('Wait Over');
        }
    })
}

btnCancelA.onclick = function(){
    // To Do
}
    
/**
 * 
 * 2. Write setTimeout() function from scratch
 * 
 * Goal: is to create a Promise Based Function.
 * 
 * How setTimeout() works?
 * 
 * setTimeout(() => {
 *      <WORK_ToDo>
 * }, <WAITING_TIME>);
 * 
 * 
 */

let wait = function(timeout){
    return new Promise((resolve, reject) => {
        if(isNaN(parseInt(timeout))){
            reject(new Error('Boii, TimeOut should be a Number!'))
        }
        setTimeout(resolve, timeout)
    })
}


btnWaitB.onclick = function(){
    wait(inTimeOutB.value).then(() => {
        console.log('Yep, Time up');
    }).catch((err) => {
        console.error(err);
    });
}

btnCancelB.onclick = function(){
    // To Do
}