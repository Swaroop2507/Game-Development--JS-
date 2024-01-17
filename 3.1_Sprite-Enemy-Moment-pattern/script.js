/** @type {HTMLCanvasElement}  */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANAVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = "enemy1.png";

        this.batWidth = 293;
        this.batHeight = 155;
        this.width = this.batWidth/2.5;
        this.height = this.batHeight /2.5; 

        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update(){
        this.x += Math.random() * 5 - 2.5;
        this.y += Math.random() * 5 - 2.5;

        //animate bat
        if(gameFrame % this.flapSpeed === 0){
            //ES6
            this.frame > 4 ? (this.frame = 0) : this.frame++;
        }        
    }
    draw(){
        ctx.drawImage(this.image, 
            this.frame * this.batWidth, 
            0,
            this.batWidth, 
            this.batHeight, 
            this.x, 
            this.y, 
            this.width, 
            this.height);
    }
};
console.log ("I am out of class");

for(let i = 0; i< numberOfEnemies; i++){
    enemiesArray.push(new Enemy());
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANAVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();