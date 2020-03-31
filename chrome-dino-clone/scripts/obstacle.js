function Obstacle() {
  this.x = width;
  this.w = 20;
  this.h = 100;
  this.heighLight = false;
  this.img1 = loadImage("assets/cactus1.png");
  this.img2 = loadImage("assets/cactus2.png");
  this.img3 = loadImage("assets/cactus3.png");

  this.r = floor(random(0,2));

  this.show = function () {
    if(this.r==0){  
      this.w = 46;
      this.h = 94;
      image(this.img1, this.x, height - this.h);
    }
    else if( this.r==1){
      this.h =68;
      image(this.img2, this.x, height - this.h);
    }
    else if(this.r==2){
      this.w = 30;
      this.h =68;
      image(this.img3, this.x, height - this.h);
    }
  }

  this.hits = function (dino) {
    return !(dino.x + 50 < this.x || dino.x + 10 > this.x + this.w || dino.y < height - this.h);
  }

  this.offScreen = function () {
    return this.x < -this.w;
  }
  this.update = function () {
    this.x -= speed;
  }
}
