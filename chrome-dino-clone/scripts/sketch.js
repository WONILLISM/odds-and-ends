let dino;
let obstacles = [];
let finished;
let score = 0;
let speed = 5;


let fsBtnPos_x;
let fsBtnPos_y;
let fsBtnSize;
  
function setup() {
  if(windowHeight<windowWidth){
    //createCanvas(1000, 400);
    createCanvas(windowWidth, windowHeight);
  }
  else{
    //createCanvas(400, 1000);
    createCanvas(windowHeight,windowWidth);
  }
  dino = new Dino();
  finished = false;
  fill(0);
  textSize(15);
}

function draw() {
  background(250);
  //create fullscreen button
  createFsBtn();
  score += 0.5;
  if (score % (speed * 100) == 0) speed++;

  textAlign(CENTER);
  noStroke();
  text("Score: "+floor(score), width / 2, 20);
  if (frameCount % 100 == 0) obstacles.push(new Obstacle());
  for (var i = obstacles.length - 1; i > -1; i--) {
    obstacles[i].show();
    obstacles[i].update();
    if (obstacles[i].hits(dino)) {
      gameOver();
      noLoop();
      break;
    }

    if (obstacles[i].offScreen()) {
      obstacles.splice(i, 1);
    }
  }
  dino.update();
  dino.show();
}

function touchStarted(){
  let d = dist(mouseX,mouseY,fsBtnPos_x,fsBtnPos_y);
  if(d<fsBtnSize){
    let fs = fullscreen();
    if(!fs){
      fullscreen(true);
    }
    else{
      fullscreen(false);
    }
  }
  if (finished) {
    finished = false;
    obstacles.splice(0, obstacles.length);
    score = 0;
    loop();
  }
  dino.jump();
}
function keyPressed() {
  if (key == ' ') {
    if (finished) {
      finished = false;
      obstacles.splice(0, obstacles.length);
      score = 0;
      loop();
    }
    dino.jump();
  }
}

function createFsBtn(){
  fsBtnSize = width/20;
  fsBtnPos_x = width - fsBtnSize;
  fsBtnPos_y = fsBtnSize/2;
  rectMode(CENTER);
  noStroke();
  fill(0,0,0,60);
  rect(fsBtnPos_x,fsBtnPos_y,fsBtnSize,fsBtnSize);
  stroke(0);
  noFill();
  strokeWeight(3);
  rect(fsBtnPos_x,fsBtnPos_y,fsBtnSize*7/10,fsBtnSize*5/10);
  strokeWeight(1);
  fill(0);
}
function gameOver() {
  finished = true;
  noStroke();
  textAlign(CENTER);
  text("Game Over!!!\nPress Space & Touch to restart", width / 2, height / 2);
}
function windowResized(){
  resizeCanvs(windowWidth, windowHeight);
}
document.ontouchmove = event =>{
  event.preventDefault();
}