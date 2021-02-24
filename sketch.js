let Rex;
let dino;
let button;
var ok = false;
var okc = 1;
let Car;
var gameOver;
let startButton;
let startGame;
let score = 0;
let scoreIncrement = 0.2;
let highScore = 0;

function setup() {
  createCanvas(700, 300);
  dino = new Dino();
  Car = new obstacle();
  button = createButton('JUMP');
  startButton = createButton('START');
  startButton.size(100, 50);
  startButton.mousePressed(start);
  button.mousePressed(yes);

  button.size(100, 50);
  strokeWeight(3);

}

function draw() {
  background(245);

  if (!gameOver && startGame == true) {

    dino.structure();
    Car.structure();
    Car.move();
    score += scoreIncrement;
    if (score > highScore)
      highScore = score;
    if (ok) {
      dino.jump();
      jump();

    }
    var a = Car.check1();

    if (a) {
      var b = dino.check2();
      if (b) {

        gameOver = true;

      }
    }
    line(0, 266, 700, 266);
  } else if (gameOver) {
    background(0);

    scoreIncrement = 0.2;
    Car = new obstacle();
    push();
    stroke(255);
    fill(255,0,0);
    textSize(100);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("GAME OVER", 350, 170);
    pop();
    if(score<12000){
      text("ur a noob :)",680,280);
    }
    else
      text("WOW :O",680,280);
           
  }
  displayScore();
}

function jump() {
  okc++;
  if (okc > 40) {
    okc = 1;
    ok = false;
  }
}

function yes() {
  ok = true
  scoreIncrement += 0.04
}

function keyPressed() {
  if (keyCode === 32 || keyCode === UP_ARROW)
    yes();
  if (keyCode === 82 || keyCode ===114)
    start();
}

function start() {
  startGame = true;

  if (gameOver == true)
    score = 0;
  gameOver = false;
}

function displayScore() {
  textSize(20);
  fill(25,50,230);
  textAlign(RIGHT, TOP);
  textFont("Helvetica");
  text("Score: " + (score - score % 1), 625, 25);
  text("High Score: " + (highScore - highScore % 1), 400, 25);
}