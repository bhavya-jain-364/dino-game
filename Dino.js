function preload() {
  Rex = loadImage("Rex.png");
  car = loadImage("car.png");
}
class Dino {
  constructor() {
    this.x = 30;
    this.y = 200;
    this.movement = 0;
  }
  structure() {
    image(Rex, this.x, this.y, 70, 70);
  }
  jump() {

    if (this.y == 200) {
      this.movement = -5
    }

    if (this.y == 100) {

      this.movement = 5
    }
    this.y += this.movement;
  }
  check2() {
    return (dino.y > 170);
  }
}