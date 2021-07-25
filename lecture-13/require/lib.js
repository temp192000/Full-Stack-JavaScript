function sayHewwo(name){
    console.log(`Hewwo, ${name}!`);
}

// console.log("Before Exporting :", module.exports);

module.exports = {
    sayHewwo
}

// console.log("After Exporting  :", module.exports);

setTimeout(() => {
    module.exports.uwu = "UwU";
    // console.log("After TimeOut  :", module.exports);
}, 1000)


