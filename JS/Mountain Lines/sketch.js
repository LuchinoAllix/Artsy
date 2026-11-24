const width = 1000;
const height = 1000;

const lineCount = 30;
const lineSpace = height / lineCount;

function setup() {
    let canva = createCanvas(width, height);
    lines();

    document.getElementById("save-button").addEventListener("click", () => {
        const name = document.getElementById("save-name").value.trim() || "canva";
        saveCanvas(canva.canvas, name, "png");
    });
}

function draw() {
    noLoop();
}

function lines(){
    let i = 1;
    while ( i < lineCount ){
        let h = i*lineCount; 
        line(0,h, width,h);
        i++
    }
}

function genMountainCoords(){
    let coords = [];
    for (let i = 0; i < Math.random()* 8; i++){
        coords.push();
        //todo
    }
    return [];
}

