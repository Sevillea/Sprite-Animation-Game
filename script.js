// Animating on canvas. 
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;//global variable for canvas width
const CANVAS_HEIGHT = canvas.height = 600; // global variable for canvas height

const playerImage = new Image(); //Same as HTML, image tag
playerImage.src = 'shadow_dog.png'; //img needs to be in root folder to render!
const spriteWidth = 575;
const spriteHeight = 523;

//function to animate shadow dog. First clearing rectangle with clear.Rect
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(100,50,100,100);
    //9 argumment:  ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) sw=src width & d = destination width. 
    ctx.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, 0, 0, CANVAS_HEIGHT, CANVAS_WIDTH); // pass player image with  X & Y coordinates. (In this case from top left corner of canvas)
    //draw rectangle with with 50px, height 100px. Passing with three arguments.
    //x++; //loop t0 animate box moving across screen from left to right if x eclared as 0 outside of function.
    requestAnimationFrame(animate); //calling parent function. Will loop over and over in an animation loop. 
     // built in drawing method. Can pass in 3, 5 or 9 arguments. \First argument is always the image you want to draw.


};
animate(); //if we don't animate, default fill in color is black. 


