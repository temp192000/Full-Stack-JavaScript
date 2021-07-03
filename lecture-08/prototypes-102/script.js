let str = "This is a string."                                       // 3 level away from null
let num = 987654321                                                 // 3 level away from null
let boo = true                                                      // 3 level away from null
let arr = [01,23,45,67,89]                                          // 3 level away from null
let fun = function(){                                               // 3 level away from null
    console.log("Yay or Nay?");
}

let obj = {                                                         // 2 level away from null       {*}
    a: 10, 
    b:"This is a String inside an array.",
    c: false,
    d: [98,76,54,32,10],
    e: {
    }
}

console.log("\t ======== Types ======== \t")
console.log("typeof Boolean  \t", typeof Boolean)
console.log("typeof Number   \t", typeof Number)
console.log("typeof String   \t", typeof String)
console.log("typeof Array    \t", typeof Array)
console.log("typeof Object   \t", typeof Object)
console.log("typeof Function \t", typeof Function)


console.log("\t ======== .__proto__ ======== \t")
console.log("str.__proto__.__proto__ == obj.__proto__ \t", str.__proto__.__proto__ == obj.__proto__)
console.log("num.__proto__.__proto__ == obj.__proto__ \t", num.__proto__.__proto__ == obj.__proto__)
console.log("boo.__proto__.__proto__ == obj.__proto__ \t", boo.__proto__.__proto__ == obj.__proto__)
console.log("arr.__proto__.__proto__ == obj.__proto__ \t", arr.__proto__.__proto__ == obj.__proto__)
console.log("fun.__proto__.__proto__ == obj.__proto__ \t", fun.__proto__.__proto__ == obj.__proto__)
console.log("obj.__proto__.__proto__ == obj.__proto__ \t", obj.__proto__.__proto__ == obj.__proto__)

// console.log("obj.constructor.__proto__ == Object.__proto__", obj.constructor.__proto__ == Object.__proto__)

console.log("\t ======== .prototype ======== \t")
console.log("str.__proto__ == String.prototype   \t", str.__proto__ == String.prototype)
console.log("num.__proto__ == Number.prototype   \t", num.__proto__ == Number.prototype)
console.log("boo.__proto__ == Boolean.prototype  \t", boo.__proto__ == Boolean.prototype)
console.log("arr.__proto__ == Array.prototype    \t", arr.__proto__ == Array.prototype)
console.log("fun.__proto__ == Function.prototype \t", fun.__proto__ == Function.prototype)
console.log("obj.__proto__ == Object.prototype   \t", obj.__proto__ == Object.prototype)


console.log("typeof Object.create(String.prototype)  \t",typeof Object.create(String.prototype))
console.log("typeof Object.create(Number.prototype)  \t",typeof Object.create(Number.prototype))
console.log("typeof Object.create(Boolean.prototype) \t",typeof Object.create(Boolean.prototype))
console.log("typeof Object.create(Array.prototype)   \t",typeof Object.create(Array.prototype))
console.log("typeof Object.create(Function.prototype)\t",typeof Object.create(Function.prototype))
console.log("typeof Object.create(Object.prototype)  \t",typeof Object.create(Object.prototype))