console.log("Hewwo, World");

// Branching Code for Browser and Node

if(typeof window != 'undefined'){
    console.log("Running Inside Browser");
}else{
    console.log("Running Outside Browser");
}


// Code Sharing between files

sayHewwo();