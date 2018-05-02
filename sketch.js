// CREATE VARIABLES
let quote;
let summerQuote = 'And so with the <span id="weather">sunshine</span> and the great bursts of leaves growing on the trees, just as things grow in fast movies, <br>I had that familiar conviction that life was beginning over again with the <span id="weather">summer</span>.<br><span id="author">―F. Scott Fitzgerald, The Great Gatsby</span>';

let imgSpring;
let imgSummer;
let imgFall;
let imgWinter;
let imgArray;

function setup() {
    seasons();
}

function draw() {}

function seasons() {
    let m = month();
    quote = select('#quote');
    noLoop();

    // LEFT 'BORDER'
    let s = function(p) {

        p.preload = function() {
            imgSpring = p.loadImage('images/spring2.jpg');
            imgSummer = p.loadImage('images/summer2.jpg');
            imgFall = p.loadImage('images/fall1.jpg');
            imgWinter = p.loadImage('images/winter2.jpg');
        };
        p.setup = function() {
            p.createCanvas(125, 720);

            imgArray = [imgSpring, imgSummer, imgFall, imgWinter];
            for (i = 0; i < imgArray.length; i++) {
                imgArray[i];
            }
            if (m == 3 || 4 || 5) {
                p.image(imgArray[0], 0, 0, 600, 720);
                quote.html(summerQuote);
            } else if (m == 6 || 7 || 8) {
                p.image(imgArray[1], 0, 0, 600, 720);
                quote.html(summerQuote);
            } else if (m == 9 || 10 || 11) {
                p.image(imgArray[2], 0, 0, 600, 720);
                quote.html(summerQuote);
            } else if (m == 12 || 1 || 2) {
                p.image(imgArray[3], 0, 0, 600, 720);
                quote.html(summerQuote);
            }
        };
        p.draw = function() {};
    };

    let canvas1 = new p5(s, 'borderleft');

    // RIGHT 'BORDER'
    let t = function(p) {

        p.preload = function() {
            imgSpring = p.loadImage('images/spring2.jpg');
            imgSummer = p.loadImage('images/summer2.jpg');
            imgFall = p.loadImage('images/fall1.jpg');
            imgWinter = p.loadImage('images/winter2.jpg');
        };
        p.setup = function() {
            p.createCanvas(125, 720);

            imgArray = [imgSpring, imgSummer, imgFall, imgWinter];
            for (i = 0; i < imgArray.length; i++) {
                imgArray[i];
            }
            if (m == 3 || 4 || 5) {
                p.image(imgSpring, 0, 0, 600, 720);
            } else if (m == 6 || 7 || 8) {
                p.image(imgArray[1], 0, 0, 600, 720);
            } else if (m == 9 || 10 || 11) {
                p.image(imgArray[2], 0, 0, 600, 720);
            } else if (m == 12 || 1 || 2) {
                p.image(imgArray[3], 0, 0, 600, 720);
            }
        };
        p.draw = function() {};
    };

    let canvas2 = new p5(t, 'borderright');

}
