/** @type {HTMLCanvasElement}  */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANAVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 50;
const enemiesArray = [];

let gameFrame = 0;

class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = "enemy4.png";
        this.speed = Math.random() * 4 + 1;

        this.batWidth = 213;
        this.batHeight = 213;
        this.width = this.batWidth/2;
        this.height = this.batHeight /2; 

        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.newX = Math.random() * canvas.width;
        this.newY = Math.random() * canvas.height;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.interval = Math.floor(Math.random() * 200 + 50);        
        
    }
    update(){
        if(gameFrame % this.interval ===0){
            this.newX = Math.random() * (canvas.width - this.width);
            this.newY = Math.random() * (canvas.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx/70;
        this.y -= dy/70;

        //IMP-anime.logic
        if(this.x + this.width <0) this.x = canvas.width;

        //character animation
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? (this.frame = 0) : this.frame++; //ES6
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