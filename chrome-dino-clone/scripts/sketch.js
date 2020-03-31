let dino;
let obstacles = [];
let finished;
let score = 0;
let speed = 5;
function setup() {
  createCanvas(displayWidth, displayHeight);
  dino = new Dino();
  finished = false;
  fill(0);
  textSize(15);
}

function draw() {
  background(250);
  score += 0.5;
  if (score % (speed * 100) == 0) speed++;

  textAlign(CENTER);
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
  if(value){
    dino.jump();
  }
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

function gameOver() {
  finished = true;
  textAlign(CENTER);
  text("Game Over!!!\nPress Space to restart", width / 2, height / 2);
}
