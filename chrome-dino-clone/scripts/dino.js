function Dino() {
  this.y = height / 1.5;
  this.x = 100;
  
  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;
  this.img1 = loadImage("assets/dino2.png");
  this.img2 = loadImage("assets/dino3.png");
  this.step = false;
  //this.s = 100; //size
  this.show = function () {
    if (frameCount % 30 == 0) {
      this.step = !this.step;
    }

    if (this.step) {
      image(this.img1, this.x, this.y - 92);
    } else {
      image(this.img2, this.x, this.y - 92);
    }
  }

  this.jump = function () {
    if (this.y == height)
      this.velocity += this.lift;
  }

  this.update = function () {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
  }
}
