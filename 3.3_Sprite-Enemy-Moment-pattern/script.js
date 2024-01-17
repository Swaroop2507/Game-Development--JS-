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
        this.image.src = "enemy3.png";
        this.speed = Math.random() * 4 + 1;

        this.batWidth = 218;
        this.batHeight = 177;
        this.width = this.batWidth/2;
        this.height = this.batHeight /2; 

        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);

        this.angle = Math.random() * 500;
        this.angleSpeed = Math.random() * 5.5 + 0.5;
        // this.wave = Math.random() * 7;
    }
    update(){
        this.x = canvas.width/2 * Math.cos(this.angle * Math.PI/200) + (canvas.width/2 - this.width/2);
        this.y = canvas.height/2 * Math.sin(this.angle * Math.PI/300) + (canvas.height/2 - this.height/2);
        this.angle += this.angleSpeed;

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