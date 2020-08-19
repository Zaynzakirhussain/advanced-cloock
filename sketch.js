var hr, min, sec;

function setup() {
  createCanvas(1365, 655);

}

function draw() {
  background(255, 255, 255);

  hr = hour();
  min = minute();
  sec = second();

  fill("black");

  push();
  textSize(130);
  text("Clock", 530, 150);
  pop();

  push();
  textSize(150);
  text(hr + " :", 300, 350);
  text(min + " :", 600, 350);
  text(sec, 900, 350);
  pop();

  textSize(70);
  text("if any queries  or problems, check your time", 10, 500);

  drawSprites();
}