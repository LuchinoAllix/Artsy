const width = 600;
const height = 600;

const lineAngle = - Math.PI / 4;
const lineLen = 300;
const lineLenRange = 4/5
const lineCount = 600;

function setup() {
    createCanvas(width, height);
    background("white");
    lines()
}

function draw() {
    noLoop();
}

function lines(){
    let i = 0;
    while ( i < lineCount ){
        myLine(0,height - i, (lineCount - i)/lineCount);
        myLine(i,height, (lineCount - i)/lineCount);
        i+=4;
    }
}

function myLine(x1, y1, frac){
    let len = (lineLen + Math.random() * lineLenRange * lineLen) * frac;
    let x2 = x1 + len * Math.cos(lineAngle);
    let y2 = y1 + len * Math.sin(lineAngle);
    drawGradientLine(x1, y1, x2, y2, color(255, 0, 100), color(0, 200, 255));
}

function drawGradientLine(x1, y1, x2, y2, c1, c2) {
  let steps = 200;

  for (let i = 0; i <= steps; i++) {
    let t = i / steps;

    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);
    let c = lerpColor(c1, c2, t);

    stroke(c);
    strokeWeight(5);
    point(x, y);
  }
}
