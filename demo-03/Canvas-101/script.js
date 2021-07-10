class Box{
    constructor(size, color){
        this.size = size;
        this.color = color;
        this.x = 0;
        this.y = 0;
    }
}

class Player extends Box{
    constructor(){
        super(50, 'blue');
        this.x = 0;
        this.y = 225;
        this.speed = 0;
    }
    move(){
        this.x = this.x + this.speed;
    }
}

class Enemy extends Box{
    constructor(speed){
        super(50, 'red');
        this.speed = speed;
    }
    move(){
        this.y = this.y + this.speed;
        if(this.y + this.speed > 560){
            this.speed = -(Math.abs(this.speed));
        }
        if(this.y < 0){
            this.speed = Math.abs(this.speed);
        }
    }
}

let player = new Player();

let e1 = new Enemy(8);
let e2 = new Enemy(5);
let e3 = new Enemy(12);
let e4 = new Enemy(10);

e1.x = 110;
e2.x = 220;
e3.x = 340;
e4.x = 460;


let paper = document.getElementById('paper');
let pen = paper.getContext('2d');

paper.addEventListener('mousedown',() =>{
    player.speed = playerSpeed;
})

paper.addEventListener('mouseup',() =>{
    player.speed = 0;
})


let gameOn = true;
let playerSpeed = 5;

function drawBox(Box){
    pen.fillStyle = Box.color;
    pen.fillRect(Box.x, Box.y, Box.size, Box.size);
}

function isCollided(Enemy, Player){
    /* Color: red; # TO DO */
}

setInterval(() => {
    playerSpeed = playerSpeed + parseInt(Math.random() * 10);
    player.y = 150 + (Math.random() * 400);
}, 2000);

function gameLoop(){
    if(!gameOn){
        return;
    }

    pen.clearRect(0,0,600,600);

    drawBox(player)

    drawBox(e1);
    drawBox(e2);    
    drawBox(e3);    
    drawBox(e4);

    if(isCollided(e1,Player) || isCollided(e2,Player) || isCollided(e3,Player)){
        gameOn = false;
        window.alert("Game Over ☹");
    }
    player.move();

    e1.move();
    e2.move();
    e3.move();
    e4.move();

    window.requestAnimationFrame(gameLoop)    
}

gameLoop()

/* Not a Convention */

// function updateGame(){
//     window.requestAnimationFrame(() =>{
//         pen.clearRect(0,0,600,600);
//         e1.move();
//         e2.move();
//         e3.move();
//         e4.move();
//         drawBox(player)
//         drawBox(e1);
//         drawBox(e2);    
//         drawBox(e3);    
//         drawBox(e4);    
//         updateGame();
//     })
// }

// updateGame()



/* Performance Issues */

// setInterval(() => {
//     pen.clearRect(0,0,600,600);
//     e1.y = e1.y + e1.speed;
//     e2.y = e2.y + e2.speed;
//     drawBox(e1);
//     drawBox(e2);
// }, 100);