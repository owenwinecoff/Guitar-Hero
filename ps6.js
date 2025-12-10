let osc;
let env;
let tiles = [];
let stringVibrations = [0, 0, 0, 0]; // Vibration intensity for each string
let stringColors = [
  [255, 100, 100],  // E string - red
  [100, 255, 100],  // A string - green
  [100, 100, 255],  // D string - blue
  [255, 255, 100]   // G string - yellow
];

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  osc = new p5.Oscillator('square');
  osc.start();
  osc.amp(0);
  
  // Create envelope for attack/decay/sustain/release
  env = new p5.Envelope();
  env.setADSR(0.001, 0.1, 0.2, 0.3); // attack, decay, sustain, release
  env.setRange(0.7, 0); // max volume to min volume
  osc.amp(env);
}

function draw() {
  background(0, 25);
  
  // Decay vibrations
  for (let i = 0; i < stringVibrations.length; i++) {
    stringVibrations[i] *= 0.92;
  }
  
  // Draw string lines with vibration effect
  drawStringLines();
  
  // Draw and update tiles
  for (let i = tiles.length - 1; i >= 0; i--) {
    let tile = tiles[i];
    tile.y += tile.speed;
    
    if(tile.y > height * 0.55) {
    tile.opacity -= 12;
  }
    
    // Draw glow effect
    
    fill(tile.color[0], tile.color[1], tile.color[2], tile.opacity);
    noStroke();
    rectMode(CENTER);
    rect(tile.x, tile.y, 40, 40, 5);
    
    drawingContext.shadowBlur = 0;
    
    // Remove tiles off screen or faded
    if (tile.y > height + 50 || tile.opacity <= 0) {
      tiles.splice(i, 1);
    }
  }
}

function drawStringLines() {
  let stringPositions = [
    width * 0.2,  // E string
    width * 0.4,  // A string
    width * 0.6,  // D string
    width * 0.8,  // G string
  ];

  let y = height * 0.6;

  stroke(255, 255, 255, 225);
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(0, y);
  vertex(width, y);
  endShape();
  
  for (let i = 0; i < stringPositions.length; i++) {
    let x = stringPositions[i];
    let vibration = stringVibrations[i];
    
    // Draw glowing vibrating string
    if (vibration > 0.1) {
      drawingContext.shadowBlur = 15 * vibration;
      drawingContext.shadowColor = `rgb(${stringColors[i][0]}, ${stringColors[i][1]}, ${stringColors[i][2]})`;
    }
    
    stroke(255, 255, 255, 30 + vibration * 225);
    strokeWeight(2 + vibration * 4);
    
    // Create wavy effect when vibrating
    beginShape();
    for (let y = 0; y <= height; y += 10) {
      let xOffset = sin(y * 0.05 + frameCount * 0.2) * vibration * 8;
      vertex(x + xOffset, y);
    }
    endShape();
    
    drawingContext.shadowBlur = 0;
  }
}

function keyPressed(){
  env.play(); // Trigger envelope on key press
  
  let stringIndex = -1;
  let stringX = 0;
  
  switch(keyCode) {
    // G String (highest bass string - starts at 98 Hz)
    case 192:  // ` - G
      osc.freq(98.00);
      stringIndex = 3;
      break;
    case 49:  // 1 - G# / Ab
      osc.freq(103.83);
      stringIndex = 3;
      break;
    case 50:  // 2 - A
      osc.freq(110.00);
      stringIndex = 3;
      break;
    case 51:  // 3 - A# / Bb
      osc.freq(116.54);
      stringIndex = 3;
      break;
    case 52:  // 4 - B
      osc.freq(123.47);
      stringIndex = 3;
      break;
    case 53:  // 5 - C
      osc.freq(130.81);
      stringIndex = 3;
      break;
    case 54:  // 6 - C# / Db
      osc.freq(138.59);
      stringIndex = 3;
      break;
    case 55:  // 7 - D
      osc.freq(146.83);
      stringIndex = 3;
      break;
    case 56:  // 8 - D# / Eb
      osc.freq(155.56);
      stringIndex = 3;
      break;
    case 57:  // 9 - E
      osc.freq(164.81);
      stringIndex = 3;
      break;
    case 48:  // 0 - F
      osc.freq(174.61);
      stringIndex = 3;
      break;
    case 189:  // - - F# / Gb
      osc.freq(185.00);
      stringIndex = 3;
      break;
    case 187:  // = - G
      osc.freq(196.00);
      stringIndex = 3;
      break;
    case 8:   // backspace - G# / Ab
      osc.freq(207.65);
      stringIndex = 3;
      break;
      
    // D String (starts at 73.42 Hz)
    case 9:   // tab - D
      osc.freq(73.42);
      stringIndex = 2;
      break;
    case 81:  // q - D# / Eb
      osc.freq(77.78);
      stringIndex = 2;
      break;
    case 87:  // w - E
      osc.freq(82.41);
      stringIndex = 2;
      break;
    case 69:  // e - F
      osc.freq(87.31);
      stringIndex = 2;
      break;
    case 82:  // r - F# / Gb
      osc.freq(92.50);
      stringIndex = 2;
      break;
    case 84:  // t - G
      osc.freq(98.00);
      stringIndex = 2;
      break;
    case 89:  // y - G# / Ab
      osc.freq(103.83);
      stringIndex = 2;
      break;
    case 85:  // u - A
      osc.freq(110.00);
      stringIndex = 2;
      break;
    case 73:  // i - A# / Bb
      osc.freq(116.54);
      stringIndex = 2;
      break;
    case 79:  // o - B
      osc.freq(123.47);
      stringIndex = 2;
      break;
    case 80:  // p - C
      osc.freq(130.81);
      stringIndex = 2;
      break;
    case 219:  // [ - C# / Db
      osc.freq(138.59);
      stringIndex = 2;
      break;
    case 221:  // ] - D
      osc.freq(146.83);
      stringIndex = 2;
      break;
    case 220:  // \ - D# / Eb
      osc.freq(155.56);
      stringIndex = 2;
      break;
      
    // A String (starts at 55 Hz)
    case 20:  // caps lock - A
      osc.freq(55.00);
      stringIndex = 1;
      break;
    case 65:  // a - A# / Bb
      osc.freq(58.27);
      stringIndex = 1;
      break;
    case 83:  // s - B
      osc.freq(61.74);
      stringIndex = 1;
      break;
    case 68:  // d - C
      osc.freq(65.41);
      stringIndex = 1;
      break;
    case 70:  // f - C# / Db
      osc.freq(69.30);
      stringIndex = 1;
      break;
    case 71:  // g - D
      osc.freq(73.42);
      stringIndex = 1;
      break;
    case 72:  // h - D# / Eb
      osc.freq(77.78);
      stringIndex = 1;
      break;
    case 74:  // j - E
      osc.freq(82.41);
      stringIndex = 1;
      break;
    case 75:  // k - F
      osc.freq(87.31);
      stringIndex = 1;
      break;
    case 76:  // l - F# / Gb
      osc.freq(92.50);
      stringIndex = 1;
      break;
    case 186:  // ; - G
      osc.freq(98.00);
      stringIndex = 1;
      break;
    case 222:  // ' - G# / Ab
      osc.freq(103.83);
      stringIndex = 1;
      break;
    case 13:  // enter - A
      osc.freq(110.00);
      stringIndex = 1;
      break;
      
    // E String (lowest bass string - starts at 41.20 Hz)
    case 16:  // shift - E
      osc.freq(41.20);
      stringIndex = 0;
      break;
    case 90:  // z - F
      osc.freq(43.65);
      stringIndex = 0;
      break;
    case 88:  // x - F# / Gb
      osc.freq(46.25);
      stringIndex = 0;
      break;
    case 67:  // c - G
      osc.freq(49.00);
      stringIndex = 0;
      break;
    case 86:  // v - G# / Ab
      osc.freq(51.91);
      stringIndex = 0;
      break;
    case 66:  // b - A
      osc.freq(55.00);
      stringIndex = 0;
      break;
    case 78:  // n - A# / Bb
      osc.freq(58.27);
      stringIndex = 0;
      break;
    case 77:  // m - B
      osc.freq(61.74);
      stringIndex = 0;
      break;
    case 188:  // , - C
      osc.freq(65.41);
      stringIndex = 0;
      break;
    case 190:  // . - C# / Db
      osc.freq(69.30);
      stringIndex = 0;
      break;
    case 191:  // / - D
      osc.freq(73.42);
      stringIndex = 0;
      break;
    default:
      console.log("key not mapped:", keyCode);
  }
  
  // Add visual effects if key was mapped
  if (stringIndex >= 0) {
    // Trigger string vibration
    stringVibrations[stringIndex] = 1.0;
    
    // Get string position
    let stringPositions = [width * 0.2, width * 0.4, width * 0.6, width * 0.8];
    stringX = stringPositions[stringIndex];
    
    // Create falling tile
    tiles.push({
      x: stringX,
      y: 0,
      speed: 7,
      color: stringColors[stringIndex],
      opacity: 255
    });
  }
}

function keyReleased(){
  env.triggerRelease(); // Fade out when key released
}

function mousePressed(){
  getAudioContext().resume(); // Enable audio on first click
  console.log("Audio enabled");
}