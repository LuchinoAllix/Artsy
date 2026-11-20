const width = 1000;
const height = 1000;

const lineAngle = - Math.PI / 4;
const lineLen = 300;
const lineLenRange = 4/5
const lineCount = width;

function setup() {
    createCanvas(width, height);
    background("white");
    frameRate(10);
    lines(true);
}

function draw() {
    lines(false);
    noLoop();
}

function lines(all){
    let i = 0;
    while ( i < lineCount ){
        let decrease = (lineCount-i)/lineCount
        console.log(decrease);
        myLine(0,height - i, decrease);
        myLine(i,height, decrease);
        all ? i+=2 : i += Math.random()*20 ;
    }
}

function myLine(x1, y1, decrease){
    let len = (lineLen + Math.random() * lineLenRange * lineLen) * decrease;
    let offset = Math.random() > 0.5 ? 0 : Math.random() * 25;
    let x2 = x1 + len * Math.cos(lineAngle);
    let y2 = y1 + len * Math.sin(lineAngle);
    drawGradientLine(x1-offset, y1+offset, x2, y2, color(205, 77, 212), color(25, 219, 219));
}

function drawGradientLine(x1, y1, x2, y2, c1, c2) {
  let steps = 500;

  for (let i = 0; i <= steps; i++) {
    let t = i / steps;

    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);
    let c = lerpColor(c1, c2, t-0.1);

    stroke(c);
    strokeWeight(7);
    point(x, y);
  }
}
