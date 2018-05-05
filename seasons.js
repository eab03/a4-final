// https://www.goodreads.com/quotes/142293-and-so-with-the-sunshine-and-the-great-bursts-of
// https://www.goodreads.com/quotes/832800-he-found-himself-wondering-at-times-especially-in-the-autumn
// https://www.goodreads.com/quotes/121518-i-wonder-if-the-snow-loves-the-trees-and-fields

let quote;
let springQuote = '“Is the spring coming?" he said. "What is it like?"...<br>"It is the sun shining on the rain and the rain falling on <br>the sunshine...”<br><br><span class="author">―Frances Hodgson Burnett, The Secret Garden</span>';
let summerQuote = 'And so with the sunshine and the great bursts of leaves growing on the trees, just as things grow in fast movies, <br>I had that familiar conviction that life was beginning over again with the summer.<br><br><span class="author">―F. Scott Fitzgerald, The Great Gatsby</span>';
let fallQuote = 'He found himself wondering at times, especially in the autumn, about the wild lands, and strange visions of mountains that he had never seen came into his dreams.<br><br><span class="author">―J.R.R. Tolkien, The Fellowship of the Ring</span>';
let winterQuote = 'I wonder if the snow loves the trees and fields, that it kisses them so gently? And then it covers them up snug, you know, with a white quilt; and perhaps it says, "Go to sleep, darlings, till the summer comes again".<br><br><span class="author">―Lewis Carroll, Alice\'s Adventures in Wonderland & Through the Looking-Glass</span>';

let imgSpring;
let imgSummer;
let imgFall;
let imgWinter;
let imgArray;


function seasons() {
    let h = hour();
    quote = select('#quote');
    noLoop();

    let spring = (h > 6 & h <= 11);
    let summer = (h >= 12 & h <= 17);
    let fall = (h >= 18 & h <= 23);
    let winter = (h >= 0 & h <= 5);

    // LEFT 'BORDER'
    let s = function(p) {

        p.preload = function() {
            imgSpring = p.loadImage('./images/spring/spring1.jpg');
            imgSummer = p.loadImage('./images/summer/summer1.jpg');
            imgFall = p.loadImage('./images/fall/fall1.jpg');
            imgWinter = p.loadImage('./images/winter/winter1.jpg');
        };
        p.setup = function() {
            p.createCanvas(125, 720);

            imgArray = [imgSpring, imgSummer, imgFall, imgWinter];
            for (i = 0; i < imgArray.length; i++) {
                imgArray[i];
            }
            if (spring) {
                p.image(imgArray[0], 0, 0, 600, 720);
                quote.html(springQuote);
            } else if (summer) {
                p.image(imgArray[1], 0, 0, 600, 720);
                quote.html(summerQuote);
            } else if (fall) {
                p.image(imgArray[2], 0, 0, 600, 720);
                quote.html(fallQuote);
            } else if (winter) {
                p.image(imgArray[3], 0, 0, 600, 720);
                quote.html(winterQuote);
            }
        };
        p.draw = function() {};
    };

    let canvas1 = new p5(s, 'borderleft');

    // RIGHT 'BORDER'
    let t = function(p) {

        p.preload = function() {
            imgSpring = p.loadImage('./images/spring/spring1.jpg');
            imgSummer = p.loadImage('./images/summer/summer1.jpg');
            imgFall = p.loadImage('./images/fall/fall1.jpg');
            imgWinter = p.loadImage('./images/winter/winter1.jpg');
        };
        p.setup = function() {
            p.createCanvas(125, 720);

            imgArray = [imgSpring, imgSummer, imgFall, imgWinter];
            for (i = 0; i < imgArray.length; i++) {
                imgArray[i];
            }
            if (spring) {
                p.image(imgSpring, 0, 0, 600, 720);
            } else if (summer) {
                p.image(imgArray[1], 0, 0, 600, 720);
            } else if (fall) {
                p.image(imgArray[2], 0, 0, 600, 720);
            } else if (winter) {
                p.image(imgArray[3], 0, 0, 600, 720);
            }
        };
        p.draw = function() {};
    };

    let canvas2 = new p5(t, 'borderright');
}
