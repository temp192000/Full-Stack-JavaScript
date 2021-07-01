let bird = {
    x:10,
    y:20,
    color:'Red',
    variant:'Red Sparrow',
    fly:function(){
        console.log('Bird is flying!');
        console.log("'this' on Object's Function: ", this);
    }
}

console.log(bird.fly())
// console.log("this on JS File: ", this)


// Dynamic Binding
// 'this' on MDN