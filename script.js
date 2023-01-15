// Animating on canvas. 
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;//global variable for canvas width
const CANVAS_HEIGHT = canvas.height = 600; // global variable for canvas height

const playerImage = new Image(); //Same as HTML, image tag
playerImage.src = 'shadow_dog.png'; //img needs to be in root folder to render!
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5; //slowing down animation by an amount. Higher number = slower animation 

//function to animate shadow dog. First clearing rectangle with clear.Rect
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(100,50,100,100);
    //9 argumment:  ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) sw=src width & d = destination width. 
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY* spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight,0, 0, spriteWidth, spriteHeight); // pass player image with  X & Y coordinates. (In this case from top left corner of canvas)
    //draw rectangle with with 50px, height 100px. Passing with three arguments.
    //x++; //loop t0 animate box moving across screen from left to right if x eclared as 0 outside of function.
     // built in drawing method. Can pass in 3, 5 or 9 arguments. \First argument is always the image you want to draw.
    if (gameFrame % staggerFrames == 0){ // remainder operator, will return true every 5 frames. (above global variable set to 5)
        if(frameX < 6) frameX++; //to iterate through the frames on the x axis
        else frameX = 0; // if larger than seven, reset it back to zero. 
    } 

    gameFrame++;
    requestAnimationFrame(animate); //calling parent function. Will loop over and over in an animation loop.

};
animate(); //if we don't animate, default fill in color is black. 


