const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 700;
const explosions = [];
let canvasPosition = canvas.getBoundingClientRect();


class Explosion {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth * 0.5;
        this.height = this.spriteHeight * 0.5;

        this.image = new Image();
        this.image.src = 'boom.png';
        this.frame = 0;
    }
    update(){
        this.frame++;
    }
    draw(){
        // ctx.drawImage(image, sx, sy, sw, sh, dx,dy,dw, dh); 
        //where d:destination, s:source;
        ctx.drawImage(
            this.image,
            this.spriteWidth * this.frame,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }}

window.addEventListener('click', function(e){
    ctx.fillStyle = 'white';
    ctx.fillRect(e.x - canvasPosition.left - 25, e.y - canvasPosition.top - 25, 50, 50);        
});