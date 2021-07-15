let valueOne = document.getElementById('valueOne');
let valueTwo = document.getElementById('valueTwo');
let valueThree = document.getElementById('valueThree');

let speed = document.getElementById('inpSpeed');

let emojiDB = ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','🥰','😗','😙','😚','🙂','🤗','🤩','🤔','🤨','😐','😑','😶','🙄','😏','😣','😥','😮','🤐','😯','😪','😫','🥱','😴','😌','😛','😜','😝','🤤','😒','😓','😔','😕','🙃','🤑','😲','🙁','😖','😞','😟','😤','😢','😭','😦','😧','😨','😩','🤯','😬','😰','😱','🥵','🥶','😳','🤪','😵','🥴','😠','😡','🤬','😷','🤒','🤕','🤢','🤮'];

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