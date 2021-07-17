function asyncFunc(callBack){
    console.log("Alarm set for 3 Seconds")
    setTimeout(() => {
        console.log("I'm the Asynchronous Function");
        callBack();
    }, 3000);
}


// Simple Asynchronous Function

// asyncFunc(() => {
//     console.log("Hewwo, I'm the Call Back Function");
// })


// Asychronous Function using Promise

let promiseFunc = function(){
    return new Promise(function(resolve, reject){
        asyncFunc(resolve);
        console.log("I'm the Promise Function");
    })
}

promiseFunc().then(() => {
    console.log("I'm the Call Back Function")
})