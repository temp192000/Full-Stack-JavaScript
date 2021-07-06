let btnWait = document.getElementById('btnWait');
let btnCount = document.getElementById('btnCount');

let divStatus = document.getElementById('divStatus');
let divVal = document.getElementById('divVal');

let count = 0;

btnWait.onclick = function(){
    divStatus.textContent = "Waiting 🟡"
    console.log("Waiting");
    setTimeout(() =>{
        divStatus.textContent = "Ready 🟢"
        console.log("Done");
    }, 5000)
}

btnCount.onclick = function(){
    console.log("Click :", count);
    count++;
    divVal.textContent = count;
}