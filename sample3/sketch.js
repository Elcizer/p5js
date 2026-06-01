let eyeOffsetX = 0; 
let eyeOffsetY = 0; 
let timer = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240); 

  fill(40); 
  noStroke();
  ellipse(300, 260, 190, 300); 
  
  fill(25); 
  noStroke();
  rect(150, 300, 300, 150, 50);

  stroke(0);
  strokeWeight(2);
  fill(255, 224, 189); 
  ellipse(300, 200, 220, 260);

  fill(40); 
  arc(298, 195, 235, 260, PI - 0.1, PI * 1.5, CHORD);
  arc(302, 195, 235, 260, PI * 1.5, PI * 2 + 0.1, CHORD);

  fill(255);
  ellipse(250, 210, 60, 45); 
  ellipse(350, 210, 60, 45); 
  fill(0);
  circle(250+eyeOffsetX, 210+eyeOffsetY, 30); 
  circle(350+eyeOffsetX, 210+eyeOffsetY, 30); 

  noFill();
  stroke(0); 
  strokeWeight(1.5);
  arc(300, 245, 20, 15, 0, PI);

  fill(255, 150, 150); 
  stroke(200, 100, 100);
  ellipse(300, 290, 75, 30); 
  line(263, 290, 337, 290); 

  fill(50);
  noStroke();
  circle(390, 210, 5);
  circle(360, 240, 5);
  
  stroke(40); 
  strokeWeight(8);
  
  if (timer > 0) {
    line(220, 185, 270, 205);
    line(380, 185, 330, 205);
    timer--;
  }
  else{
    line(220, 185, 270, 185);
    line(380, 185, 330, 185);
  }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    eyeOffsetX = -15;
    eyeOffsetY = 0;
  } else if (keyCode === RIGHT_ARROW) {
    eyeOffsetX = 15;
    eyeOffsetY = 0;
  } else if (keyCode === UP_ARROW) {
    eyeOffsetX = 0;
    eyeOffsetY = -10;
  } else if (keyCode === DOWN_ARROW) {
    eyeOffsetX = 0;
    eyeOffsetY = 10;
  } else if (keyCode === 32) {
    eyeOffsetX = 0;
    eyeOffsetY = 0;
  }
  if (key === 's') {
    saveGif('20221762_이경하', 10); 
  }
}
function mousePressed() {
  if (mouseButton === LEFT) {
    timer = 60; 
  }
}