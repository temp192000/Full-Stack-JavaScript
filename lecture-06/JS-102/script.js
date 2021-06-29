function giveNumber(){
    return 1
}

let testVariable = function giveString(){
    return 'js is weird'
}

console.log('true',typeof true)
console.log('null',typeof null)
console.log('undefined',typeof undefined)
console.log('a',typeof 'a')
console.log('abcd',typeof 'abcd')
console.log('1',typeof 1)
console.log('99.123456789',typeof 99.123456789)
console.log(giveNumber,typeof giveNumber)
console.log(giveNumber(),typeof giveNumber())
console.log(testVariable, typeof testVariable)
console.log(testVariable(), typeof testVariable())