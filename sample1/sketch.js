function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 210, 255);


  fill(61);
  rect(20, 350, 560, 40);


  let pillarX = 510;
  fill(61);
  rect(pillarX, 20, 80, 340);

  fill(180);
  rect(pillarX + 12, 40, 50, 60);


  fill(251, 206, 177);
  arc(295, 65, 100, 100, PI / 3, PI * 1.5);
  
  rect(255, 110, 85, 140);
  rect(175, 110, 75, 28);
  rect(345, 110, 75, 28);
  rect(255, 250, 35, 95);
  rect(310, 250, 35, 95);

  fill(255, 0, 0);
  quad(205, 240, 370, 175, 510, 148, 265, 168);

  fill(255, 255, 0);
  quad(48, 18, 28, 100, 88, 118, 38, 195);

  fill(255, 255, 0);
  circle(140, 80, 120);

  fill(255, 100, 100);
  circle(400, 80, 120);

  fill(50, 255, 50);
  triangle(72, 310, 105, 205, 152, 300);
}

function keyPressed() {
  if (key === 's') {
    saveGif('20221762_이경하', 10);
  }
}