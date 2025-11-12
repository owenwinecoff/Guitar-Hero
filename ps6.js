let rad = 0;
let growthRate = 0;
let shrinkRate = 0;
let sound1, sound2;
let circles = [];
let osc;


function setup(){
  createCanvas(windowWidth, windowHeight);

  osc = new p5.Oscillator('sine');
  osc.start();
  osc.amp(0);
}

function draw(){
  background(0, 25);
  noFill();
  stroke(255);
  strokeWeight(2);
  
  rad += growthRate;
  rad -= shrinkRate;
  rad = max(rad, 0);
  
  if(rad === 0){
    circles = [];
  }

  let freq = map(rad, 0, 300, 400, 150);
  osc.freq(freq);

  let amp = map(rad, 0, 300, 0, 0.15);
  amp = constrain(amp, 0, 0.15);
  osc.amp(amp);
  
  for(let c of circles){
    circle(c.x, c.y, rad);
  }
  
}

function mousePressed(){
  circles.push({x: mouseX, y: mouseY});
  osc.start();
  
  growthRate = 5;
  shrinkRate = 0;
}

function mouseReleased(){
  shrinkRate = 8;
  growthRate = 0;
}