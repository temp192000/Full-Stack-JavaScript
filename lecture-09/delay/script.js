let btnWait = document.getElementById('btnWait');
let btnCount = document.getElementById('btnCount');

let divStatus = document.getElementById('divStatus');
let divVal = document.getElementById('divVal');

let count = 0;

btnWait.onclick = function(){
    divStatus.textContent = "Waiting 🟡"
    console.log("Waiting");
    let start = Date.now();
    while(Date.now() < start + 5000){
        // wait for 5 Seconds
    }
    divStatus.textContent = "Ready 🟢"
    console.log("Done");
}

btnCount.onclick = function(){
    console.log("Click :", count);
    count++;
    divVal.textContent = count;
}