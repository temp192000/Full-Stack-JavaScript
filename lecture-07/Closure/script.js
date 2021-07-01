function outer(arg1){
    let var1 = 10;
    console.log('Outer function executed.')
    console.log(arguments[0], arguments[1])
    function inner(arg2){
        let var2 = 20;
        console.log(arg1, var1, arg2, var2);
        console.log('Inner function executed. Closure gone right')
        console.log(arguments[0], arguments[1])
    }
    return inner;
}

let fVar = outer('argument:1')

fVar('argument:2')