// Animating on canvas. 
let playerState = "run";
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){ // event listener for the drop down. Each time it's clicked, change playerState to the value of target animation. 
    playerState = e.target.value; // referring to an element that is clicked from the dropdown. The values we've added in the HTML <options>. (e) = event object
})


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;//global variable for canvas width
const CANVAS_HEIGHT = canvas.height = 600; // global variable for canvas height

const playerImage = new Image(); //Same as HTML, image tag
playerImage.src = 'shadow_dog.png'; //img needs to be in root folder to render!
const spriteWidth = 575;
const spriteHeight = 523;


let gameFrame = 0;
const staggerFrames = 5; //slowing down animation by an amount. Higher number = slower animation 
const spriteAnimations = [];
const animationStates = [
    {//first row of animations
        name: "idle", 
        frame: 7,
        /*loc: [
            {x: 0, y: 0},
            {x:575, y: 0},
            {x:1150, y: 0},
            {x:1725, y: 0},
            {x:2300, y:0},
            {x:2875, y:0},
            {x:3450, y:0}
        ]*/
    },
    { //second row of animations
        name: "jump", 
        frame: 7,
      /*  loc: [
            {x: 0, y: 523},
            {x: 575, y: 523},
            {x: 1150, y: 523},
            {x: 1725, y: 523},
            {x: 2300, y: 523},
            {x: 2875, y: 523},
            {x: 3450, y: 523}
        ]*/
    },
    {//third row of animations
        name: "fall", 
        frame: 7,
    },
     {// Fourth row of animations
        name: "run", 
        frame: 9,
    },
     {// Fifth row of animations
        name: "dazed", 
        frame: 11,
    },
    {// Fifth row of animations
        name: "sit", 
        frame: 5,
    },
    {// Fifth row of animations
        name: "roll", 
        frame: 7,
    },
    {// Fifth row of animations
        name: "bite", 
        frame: 7,
    },
    {// Fifth row of animations
        name: "ko", 
        frame: 12,
    },
    {// Fifth row of animations
        name: "getHit", 
        frame: 4,
    }
];
// .forEach method:
animationStates.forEach((state, index) => {
    let frames = {
        loc:[],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth; //temp variable positionX
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY}); //push values into empty location (loc) array.
    }
    spriteAnimations[state.name] = frames; // key value pair

}); //ES6 - simplified way of writing a function in JS
console.log(spriteAnimations);


//function to animate shadow dog. First clearing rectangle with clear.Rect
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //9 argumment:  ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) sw=src width & d = destination width. 
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length; //times 6 idle frames. position variable will increase until it gets to 6.
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;


    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight); // pass player image with  X & Y coordinates. (In this case from top left corner of canvas)
    //draw rectangle with with 50px, height 100px. Passing with three arguments.
    //x++; //loop t0 animate box moving across screen from left to right if x eclared as 0 outside of function.
     // built in drawing method. Can pass in 3, 5 or 9 arguments. \First argument is always the image you want to draw.

    /*if (gameFrame % staggerFrames == 0){ // remainder operator, will return true every 5 frames. (above global variable set to 5)
        if(frameX < 6) frameX++; //to iterate through the frames on the x axis
        else frameX = 0; // if larger than seven, reset it back to zero. 
    } */ // OR: 
    


    gameFrame++;
    requestAnimationFrame(animate); //calling parent function. Will loop over and over in an animation loop.

};
animate();

/*spriteAnimations = [
    "idle" = {
       
    }
    "jump" = {
        loc[]
    }
]
*/


