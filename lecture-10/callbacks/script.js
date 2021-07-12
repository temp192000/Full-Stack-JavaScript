/* 

// Synchronous Execution

function doSomething(done){
    console.log("1. Function doSomething.");
    done();
}

doSomething(() => {
    console.log("2. Inside Arrow Function.")
})

console.log("3. Done.")

*/

/*--------------------------------------------------------------------------*/

// Asynchronous Execution

function doSomething(done){
    console.log("1. Function doSomething.");
    setTimeout(done,0);
}

doSomething(() => {
    console.log("2. Inside Arrow Function.")
})

console.log("3. Done.")
