
function createGreeter(greeting){
    function greet(name){
        console.log(greeting, name())
    }
    return greet
}

let greetMorning = createGreeter("Good Morning")
let greetEvening = createGreeter("Good Evening")


function getUserName(){
    return document.getElementById('userName').value
}
