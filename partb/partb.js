// CREATE VARIABLES
let springButton, summerButton, fallButton, winterButton;

let imgSpring, imgSummer, imgFall, imgWinter;
let imgSpring2;

let season;
let clocation;

// LOAD IMAGES
function preload() {
    imgSpring = loadImage('images/spring2.jpg');
    imgSummer = loadImage('images/summer2.jpg');
    imgFall = loadImage('images/fall1.jpg');
    imgWinter = loadImage('images/winter2.jpg');
    imgSpring2 = loadImage('images/spring3.jpg');
}

function setup() {
    let canvas = createCanvas(600, 400);
    // canvas.position(700, 50);
    canvas.parent('mycontainer');
    background(imgSpring2);

    // CREATE BUTTON
    // https://www.youtube.com/watch?v=587qclhguQg
    // https://vimeo.com/channels/learningp5js/142698163
    springButton = createButton('Spring');
    springButton.position(500, 280);
    springButton.addClass("button");
    springButton.mousePressed(changeSpring);

    summerButton = createButton('Summer');
    summerButton.position(625, 280);
    summerButton.addClass("button");
    summerButton.mousePressed(changeSummer);

    fallButton = createButton('Fall');
    fallButton.position(750, 280);
    fallButton.addClass("button");
    fallButton.mousePressed(changeFall);

    winterButton = createButton('Winter');
    winterButton.position(875, 280);
    winterButton.addClass("button");
    winterButton.mousePressed(changeWinter);

} // close function setup

function draw() {}

// https://p5js.org/examples/image-load-and-display-image.html
function changeSpring() {
            loadImage('images/spring2.jpg', function(imgSpring) {
                image(imgSpring, 0, 0, imgSpring.width / 7.5, imgSpring.height / 7.5);
                clocation = select("#location");
                clocation.html('Boston, MA');
            });
            weather = select("#weather");
            weather.html('Spring');
}

function changeSummer() {
            loadImage('images/summer2.jpg', function(imgSummer) {
                image(imgSummer, 0, 0, imgSummer.width / 7.5, imgSummer.height / 7.5);
                clocation = select("#location");
                clocation.html('Cambridge, MA');
            });
            weather = select("#weather");
            weather.html('Summer');
}

function changeFall() {
            loadImage('images/fall1.jpg', function(imgFall) {
                image(imgFall, 0, 0, imgFall.width / 7.5, imgFall.height / 7.5);
            });
            weather = select("#weather");
            weather.html('Fall');
}

function changeWinter() {
            loadImage('images/winter2.jpg', function(imgWinter) {
                image(imgWinter, 0, 0, imgWinter.width / 7.5, imgWinter.height / 7.5);
            });
            weather = select("#weather");
            weather.html('Winter');
}
