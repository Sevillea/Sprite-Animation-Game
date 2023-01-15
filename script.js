const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;//global variable for canvas width
const CANVAS_HEIGHT = canvas.height = 600; // global variable for canvas height

const playerImage = new Image(); //Same as HTML, image tag
playerImage.src = "shadow_dog.png";

//function to animate shadow dog. First clearing rectangle with clear.Rect
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.fillRect(50,50,100,100); //draw rectangle with with 50px, height 100px
    requestAnimationFrame(animate) //calling parent function. Will loop over and over in an animation loop. 
          
};
animate(); //if we don't animate, default fill in color is black. 


