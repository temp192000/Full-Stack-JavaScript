let valueOne = document.getElementById('valueOne');
let valueTwo = document.getElementById('valueTwo');
let valueThree = document.getElementById('valueThree');

let speed = document.getElementById('inpSpeed');

let emojiDB = ['๐','๐','๐','๐คฃ','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐ฅฐ','๐','๐','๐','๐','๐ค','๐คฉ','๐ค','๐คจ','๐','๐','๐ถ','๐','๐','๐ฃ','๐ฅ','๐ฎ','๐ค','๐ฏ','๐ช','๐ซ','๐ฅฑ','๐ด','๐','๐','๐','๐','๐คค','๐','๐','๐','๐','๐','๐ค','๐ฒ','๐','๐','๐','๐','๐ค','๐ข','๐ญ','๐ฆ','๐ง','๐จ','๐ฉ','๐คฏ','๐ฌ','๐ฐ','๐ฑ','๐ฅต','๐ฅถ','๐ณ','๐คช','๐ต','๐ฅด','๐ ','๐ก','๐คฌ','๐ท','๐ค','๐ค','๐คข','๐คฎ'];

function getEmoji(){
    return emojiDB[Math.floor(Math.random() * 77)];
}

let animationSpeed;
function updateAnimation(newSpeed){
    if(animationSpeed) clearInterval(animationSpeed);

    animationSpeed = setInterval(() => {
        valueOne.innerText = getEmoji();
        valueTwo.innerText = getEmoji();
        valueThree.innerText = getEmoji();
    }, 1000 / newSpeed)    
}

speed.onchange = function(ev) {
    document.documentElement.style.setProperty('--speed', ev.target.value);
    updateAnimation(ev.target.value);
}


/**
 * To Do:
 *          1. Intially, No Animation.
 *          2. Start, Stop Spin Button
 *          3. When 3 Slots match, PopUp Winner Message
 *          4. When 3 Slots doesn't match for more than certain time, PopUp Try ya Luck next Day Message.
 */