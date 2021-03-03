
// window.onload = () => {
//     document.getElementById('start-button').onclick = () => {
       
    
//      animate()
//     };
  
    
//   };
  

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;

const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop('0.4', '#fff');
gradient.addColorStop('0.5', '#000');
gradient.addColorStop('0.55', '#4040ff');
gradient.addColorStop('0.6', '#000');
gradient.addColorStop('0.9', '#fff');


const eaglesArray = []; 

function generateEagles() {
    const randomHeight = Math.round(Math.random() * 20 + 5);
    
    const randomWidth = Math.round(Math.random() * 50 + 25);
    
    const randomYValue = Math.round(Math.random() * (300 - randomHeight));
    const newEagles = new Eagles(
        canvas.width,
        randomYValue,
        30,
        30
        );
        eaglesArray.push(newEagles);
        newEagles.moveLeftForever();
    }
    
    const background = new Image();
    background.scr = '/images/darkforest.png';
    const darkforest = {
        x1: 0,
        x2: canvas.width,
        y: 0,
        width: canvas.width,
        height: canvas.height
    }
    
//    function handleBackground(){
//         if (darkforest.x1 <= -darkforest.width + gameSpeed) darkforest.x1 = darkforest.width;
//         else darkforest.x1 -= gameSpeed;
//         if (darkforest.x2 <= -darkforest.width + gameSpeed) darkforest.x2 = darkforest.width;
//         else darkforest.x2 -= gameSpeed;
//         ctx.drawImage(background, darkforest.x1, darkforest.y, darkforest.width, darkforest.height);
//         ctx.drawImage(background, darkforest.x2, darkforest.y, darkforest.width, darkforest.height);
        
//     }

    function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    // handleBackground();
    handleObstacles();
    bird.update();
    bird.draw();
    ctx.fillStyle = gradient;
    ctx.font = '90px Georgia';
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handleCollisions ();
    if (handleCollisions()) return;         
    handleParticles ();
    requestAnimationFrame(animate);
    angle+=0.12;
    hue++;
    frame++;
    eaglesArray.forEach((eachEagles) => {
        eachEagles.draw();
      });
    }
    animate()

    setInterval(generateEagles,8000)

window.addEventListener('keydown', function(e){
    if (e.code === 'Space') spacePressed = true;
});
window.addEventListener('keyup', function(e){
    if(e.code ==='Space') spacePressed = false
});

const bang = new Image();
bang.src = './images/bang.png'
function handleCollisions (){
    for (let i = 0; i < obstacleArray.length; i++){
        if(bird.x < obstacleArray[i].x + obstacleArray[i].width &&
            bird.x + bird.width > obstacleArray[i].x &&
            ((bird.y < 0 + obstacleArray[i].top && bird.y + bird.height > 0) ||
            (bird.y > canvas.height - obstacleArray[i].bottom &&
            bird.y + bird.height < canvas.height))){
                // collision detected
                ctx.drawImage(bang,bird.x, bird.y, 50, 50);
                ctx.font = "25px Georgia";
                ctx.fillStyle = 'black';
                ctx.fillText('Game Over, your score is ' + score, 160, + canvas.height/2 - 10);
                return true;
            }
        }
    for (let i = 0; i < eaglesArray.length; i++){
            if(bird.x <eaglesArray[i].x + eaglesArray[i].width &&
                bird.x + bird.width > eaglesArray[i].x &&
                bird.y <eaglesArray[i].y + eaglesArray[i].height &&
                bird.y + bird.height > eaglesArray[i].y){
                    // collision detected
                    ctx.drawImage(bang,bird.x, bird.y, 50, 50);
                ctx.font = "25px Georgia";
                ctx.fillStyle = 'white';
                ctx.fillText('Game Over, your score is ' + score, 160, + canvas.height/2 - 10);
                return true;
                }
            }
        
        
}
          






