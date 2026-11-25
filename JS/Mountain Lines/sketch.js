const width = 1000;
const height = 1000;

const lineCount = 30;
const lineSpace = height / lineCount;

const maxHeight = 100;

function setup() {
    let canva = createCanvas(width, height);
    lines();
    console.log("q")
    
    let coords = genMountainCoords();
    
    console.log(coords)
    coords.map(x=>{
        line(x[1], x[2], x[1], x[0]+x[2]);
    })

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

    for (let i = 0; i < Math.random()* 4; i++){
        let coord = [];
        let mountainHeight = 25 + Math.random() * maxHeight;
        coord.push(
            mountainHeight,
            Math.random() * width, 
            mountainHeight + Math.random() * (height - mountainHeight));
        coords.push(coord);
    }

    return coords;
}



