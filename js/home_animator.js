let x = 50;
let y = 50;
let speedX = 1;
let speedY = 1;
let join_rectW = 300;

function setup() {
    canvasHeight = document.getElementById('drag_drop').offsetHeight - 10;
    join_rectX = windowWidth / 2 - join_rectW / 2;
    join_rectY = canvasHeight * 0.7;
    let cnv = createCanvas(windowWidth, canvasHeight);
    cnv.parent('drag_drop'); // Assign the canvas to the container
    cnv.style('width', '100%');
    cnv.style('height', '100%');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - 350); // Resize canvas, adjust for navbar height
}

function draw() {
    background(255, 215, 107);

    fill(255, 0, 0);
    ellipse(x, y, 80, 80);

    x += speedX;
    y += speedY;

    if (x > width - 40 || x < 40) {
        speedX *= -1;
    }

    if (y > height - 40 || y < 40) {
        speedY *= -1;
    }
}
