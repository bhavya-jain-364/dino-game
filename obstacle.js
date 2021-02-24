let car;

class obstacle {
  constructor() {
    this.x = 600;
    this.y = 240;
    this.speed = -5
  }
  structure() {
    image(car, this.x, this.y, 70, 30);
  }
  move() {
    this.x += this.speed;
    if (this.x < -30) {
      this.x = 700;
      if (this.speed > -15)
        this.speed -= 0.2
      else {
        this.speed = random(-16, -18.5);
      }
    }


  }

  check1() {

    return (Car.x > 10 && Car.x < 80);
  }
}