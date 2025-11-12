let osc;
let env;

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  osc = new p5.Oscillator('sawtooth');
  osc.start();
  osc.amp(0);
  
  // Create envelope for attack/decay/sustain/release
  env = new p5.Envelope();
  env.setADSR(0.001, 0.1, 0.2, 0.3); // attack, decay, sustain, release
  env.setRange(0.7, 0); // max volume to min volume
  osc.amp(env);
}

function draw(){
  background(0, 25);
  noFill();
  stroke(255);
  strokeWeight(2);
}

function keyPressed(){
  env.play(); // Trigger envelope on key press
  
  switch(keyCode) {
    // G String (highest bass string - starts at 98 Hz)
    case 192:  // ` - G
      osc.freq(98.00);
      break;
    case 49:  // 1 - G# / Ab
      osc.freq(103.83);
      break;
    case 50:  // 2 - A
      osc.freq(110.00);
      break;
    case 51:  // 3 - A# / Bb
      osc.freq(116.54);
      break;
    case 52:  // 4 - B
      osc.freq(123.47);
      break;
    case 53:  // 5 - C
      osc.freq(130.81);
      break;
    case 54:  // 6 - C# / Db
      osc.freq(138.59);
      break;
    case 55:  // 7 - D
      osc.freq(146.83);
      break;
    case 56:  // 8 - D# / Eb
      osc.freq(155.56);
      break;
    case 57:  // 9 - E
      osc.freq(164.81);
      break;
    case 48:  // 0 - F
      osc.freq(174.61);
      break;
    case 189:  // - - F# / Gb
      osc.freq(185.00);
      break;
    case 187:  // = - G
      osc.freq(196.00);
      break;
    case 8:   // backspace - G# / Ab
      osc.freq(207.65);
      break;
      
    // D String (starts at 73.42 Hz)
    case 9:   // tab - D
      osc.freq(73.42);
      break;
    case 81:  // q - D# / Eb
      osc.freq(77.78);
      break;
    case 87:  // w - E
      osc.freq(82.41);
      break;
    case 69:  // e - F
      osc.freq(87.31);
      break;
    case 82:  // r - F# / Gb
      osc.freq(92.50);
      break;
    case 84:  // t - G
      osc.freq(98.00);
      break;
    case 89:  // y - G# / Ab
      osc.freq(103.83);
      break;
    case 85:  // u - A
      osc.freq(110.00);
      break;
    case 73:  // i - A# / Bb
      osc.freq(116.54);
      break;
    case 79:  // o - B
      osc.freq(123.47);
      break;
    case 80:  // p - C
      osc.freq(130.81);
      break;
    case 219:  // [ - C# / Db
      osc.freq(138.59);
      break;
    case 221:  // ] - D
      osc.freq(146.83);
      break;
    case 220:  // \ - D# / Eb
      osc.freq(155.56);
      break;
      
    // A String (starts at 55 Hz)
    case 20:  // caps lock - A
      osc.freq(55.00);
      break;
    case 65:  // a - A# / Bb
      osc.freq(58.27);
      break;
    case 83:  // s - B
      osc.freq(61.74);
      break;
    case 68:  // d - C
      osc.freq(65.41);
      break;
    case 70:  // f - C# / Db
      osc.freq(69.30);
      break;
    case 71:  // g - D
      osc.freq(73.42);
      break;
    case 72:  // h - D# / Eb
      osc.freq(77.78);
      break;
    case 74:  // j - E
      osc.freq(82.41);
      break;
    case 75:  // k - F
      osc.freq(87.31);
      break;
    case 76:  // l - F# / Gb
      osc.freq(92.50);
      break;
    case 186:  // ; - G
      osc.freq(98.00);
      break;
    case 222:  // ' - G# / Ab
      osc.freq(103.83);
      break;
    case 13:  // enter - A
      osc.freq(110.00);
      break;
      
    // E String (lowest bass string - starts at 41.20 Hz)
    case 16:  // shift - E
      osc.freq(41.20);
      break;
    case 90:  // z - F
      osc.freq(43.65);
      break;
    case 88:  // x - F# / Gb
      osc.freq(46.25);
      break;
    case 67:  // c - G
      osc.freq(49.00);
      break;
    case 86:  // v - G# / Ab
      osc.freq(51.91);
      break;
    case 66:  // b - A
      osc.freq(55.00);
      break;
    case 78:  // n - A# / Bb
      osc.freq(58.27);
      break;
    case 77:  // m - B
      osc.freq(61.74);
      break;
    case 188:  // , - C
      osc.freq(65.41);
      break;
    case 190:  // . - C# / Db
      osc.freq(69.30);
      break;
    case 191:  // / - D
      osc.freq(73.42);
      break;
    default:
      console.log("key not mapped:", keyCode);
  } 
}

function keyReleased(){
  env.triggerRelease(); // Fade out when key released
}

function mousePressed(){
  getAudioContext().resume(); // Enable audio on first click
  console.log("Audio enabled");
}