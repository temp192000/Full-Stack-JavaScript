let inNum = document.getElementById('inNum');
let btnPrint = document.getElementById('btnPrint');
let ulNumList = document.getElementById('ulNumList');

function fizzBuzzLazy(N){
    for(let i = 1; i <= N; i++){
        let li = document.createElement('li');
        if(i%3 === 0 && i%5 === 0){
            li.innerText = "fizzbuzz";
        }else if(i%5 === 0){
            li.innerText = "buzz";
        }else if(i%3 === 0){
            li.innerText = "fizz";
        }else{
            li.innerText = i;
        }
        ulNumList.appendChild(li);
    }
} 

function fizzBuzz(N){
    for(let i = 1; i <= N; i++){
        let print = ""
        let li = document.createElement('li');
        
        if(i%3 == 0) print += "fizz"
        if(i%5 == 0) print += "buzz"
        if(print === "") print = i

        li.textContent = print
        ulNumList.appendChild(li)
    }
}

let c3 = 0;
let c5 = 0;

function fizzBuzzSuper(N){
    for(let i = 1; i <= N; i++){
        let print = ""
        let li = document.createElement('li');
        
        c3++;
        c5++;
        if(c3 == 3){
            c3 = 0;
            print += "fizz";
        }
        if(c5 == 5){
            c5 = 0;
            print += "buzz";
        }
        if(print === "") print = i

        li.textContent = print
        ulNumList.appendChild(li)
    }
}

btnPrint.onclick = function(){
    let start = Date.now();
    let N = parseInt(inNum.value);
    // fizzBuzzLazy(N); // Unoptimised
    // fizzBuzz(N); // Optimised
    fizzBuzzSuper(N); // Super Optimised
    console.log("TimeTaken: ", Date.now() - start);
}

