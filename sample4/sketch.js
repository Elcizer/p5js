function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0,210,256);
  
  let pillarX = map(sin(frameCount * 0.008), -1, 1, -80, 600);
  fill(61);
  rect(pillarX, 30, 80, 500);
  rect(50, 350, 500, 40);
  
  fill(200);
  rect(pillarX + 20, 50, 40, 50);
  
  fill(251,206,177);
  rect(270,100,100,150);
  
  rect(250,250,40,80);
  rect(310,250,40,80);
  
  rect(180,100,70,30);
  rect(350,100,70,30);
  
  arc(300,50,100,100,PI/3,PI*1.5);
  
  
  let cycle = (frameCount % 240) / 240;
  
  let yellowSize = 0;
  if (cycle < 0.5) {
    yellowSize = map(sin(cycle * TWO_PI), 0, 1, 0, 130);
    yellowSize = max(yellowSize, 0);
  }
  
  let redSize = 0;
  if (cycle >= 0.5) {
    redSize = map(sin((cycle - 0.5) * TWO_PI), 0, 1, 0, 130);
    redSize = max(redSize, 0);
  }
  
  fill(255,255,000);
  quad(50,20,30,100,90,120,40,200);
  if (yellowSize > 0) circle(130, 50, yellowSize);
  
  fill(255,100,100);
  if (redSize > 0) circle(400, 50, redSize);
  
  fill(255,0,0);
  quad(200,250,370,180,500,150,260,170);
  
  fill(50,256,50);
  triangle(70,300,100,200,150,290);
  
}
function keyPressed() {
  if (key === 's') {
    saveGif('20221762_이경하', 10); 
  }
}