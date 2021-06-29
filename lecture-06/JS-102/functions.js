console.log(alpha())
console.log(beta())

let gamma = function(){
    return 'gamma'
}

console.log(gamma())

function alpha(){
    return 'alpha'
}

function beta(){
    return 'beta'
}


// Polymorphism in JavaScript
// Implementation Level Polymorphism

function area(height, width){
    if(!width){
        return Math.PI*height*height
    }
    return height*width
}

console.log(area(3,4))
console.log(area(4))

function printWhatever(){
    if(!arguments){
        return 'No Arguments?'
    }
    return arguments
}

console.log(printWhatever())
console.log(printWhatever('fooBar', 'test', 'arguments','fooBar', 'test', 'arguments','fooBar', 'test', 'arguments'))