/**
 * Pure Functions or Lambda Functions
 * 
 * 
 * Lambda functions are used to represent Mathematical expressions.
 * 
 */

function f1(x){
    // y = f1(x) = 2x + 3
    // This is a Lambda Function

    return (2*x)+3;
}

console.log(f1(10)); 
/**
 * 1. Stateless
 * 2. Output depends only on the input and not on the state of machine
 * 3. So, Output will always be same for the same the input
 */


let count = parseInt(Math.random()*10);
function f2(y){
    // Not a Lambda Function

    return count+y;
}

console.log(f2(10));

/**
 * 1. State Dependent
 * 2. Output will depend upon the state of the machine
 * 3. So, Output will always be different for the same input
 */