// CREATE VARIABLES
let dropdown;
let defaultSelect, springSelect, summerSelect, fallSelect, winterSelect;
let quoteSelect;
let quoteButton;

let imgSpring, imgSummer, imgFall, imgWinter;
let imgSpring2;

// LOAD IMAGES
function preload() {
    imgSpring = loadImage('images/spring2.jpg');
    imgSummer = loadImage('images/summer2.jpg');
    imgFall = loadImage('images/fall1.jpg');
    imgWinter = loadImage('images/winter2.jpg');
    imgSpring2 = loadImage('images/spring3.jpg');
}

/*
/ 1. position() an element on the page using P5
/ 2. make use of parent() or child() to reorganize elements on the page
/ 3. make use of at least one element-specific event handler and callback function:
*/
function setup() {
    let canvas = createCanvas(600, 450);
    canvas.position(700, 50);
    canvas.parent('mycontainer');
    background(imgSpring2);

    // CREATE DROPDOWN MENU
    // https://github.com/processing/p5.js/issues/1864
    // https://gist.github.com/shiffman/7549e5225c042ee25a80
    dropdown = createSelect();
    dropdown.position(200, 400);
    dropdown.option('select a season!');
    dropdown.option('spring');
    dropdown.option('summer');
    dropdown.option('fall');
    dropdown.option('winter');

    dropdown.changed(mySelectEvent);

    // CREATE THE ELEMENT FOR THE QUOTATION
    /*
    / 4. create an element BESIDES a canvas element using P5 – whether using an
    / “element-specific” function such as createP(), createDiv(), createImg()
    / or similar – or using the generic createElement() function.
    */
    quoteSelect = createP("");
    quoteSelect.position(200, 450);

    // CREATE BUTTON
    // https://www.youtube.com/watch?v=587qclhguQg
    // https://vimeo.com/channels/learningp5js/142698163
    quoteButton = createButton('click me');
    quoteButton.position(200, 300);
    quoteButton.mousePressed(changeQuote);
} // close function setup

function draw() {}

// LOAD SPECIFIC IMAGE WHEN THE DROPDOWN IS SELECTED
// https://p5js.org/examples/image-load-and-display-image.html
// https://processing.org/reference/PImage_resize_.html
function mySelectEvent() {
    let selected = this.selected();
    if (selected === 'spring') {
        loadImage('images/spring2.jpg', function(imgSpring) {
            image(imgSpring, 0, 0, imgSpring.width / 7.5, imgSpring.height / 7.5);
        });
        quoteSelect.html("");
    } else if (selected === 'summer') {
        loadImage('images/summer2.jpg', function(imgSummer) {
            image(imgSummer, 0, 0, imgSummer.width / 7.5, imgSummer.height / 7.5);
        });
        quoteSelect.html("");
    } else if (selected === 'fall') {
        loadImage('images/fall1.jpg', function(imgFall) {
            image(imgFall, 0, 0, imgFall.width / 7.5, imgFall.height / 7.5);
        });
        quoteSelect.html("");
    } else if (selected === 'winter') {
        loadImage('images/winter2.jpg', function(imgWinter) {
            image(imgWinter, 0, 0, imgWinter.width / 7.5, imgWinter.height / 7.5);
        });
        quoteSelect.html("");
    }
} // close function mySelectEvent

// WHEN CLICK ON THE BUTTON CHANGE THE STYLE AND TEXT OF THE QUOTATION
/*
/ 5. style() a DOM element with CSS from within P5
*/
function changeQuote() {
    let seasons = ['spring', 'summer', 'fall', 'winter'];
    let season = random(seasons); // select random word
    if (season == 'spring') {
        // https://www.brainyquote.com/topics/spring
        quoteSelect.html("“Spring is nature's way of saying, 'Let's party!'”<br><br>― Robin Williams");
        quoteSelect.style('color', '#FF69B4');
    } else if (season == 'summer') {
        //https://www.brainyquote.com/quotes/anton_chekhov_105581?src=t_summer");
        quoteSelect.html("“Summer afternoon—summer afternoon; <br>to me those have always been the two most beautiful<br>words in the English language.”<br><br>― Henry James");
        quoteSelect.style('color', 'green');
    } else if (season == 'fall') {
        // https://www.goodreads.com/quotes/tag/autumn
        quoteSelect.html("“Autumn is a second spring when every leaf is a flower.”<br><br>― Albert Camus");
        quoteSelect.style('color', 'orange');
    } else if (season == 'winter') {
        //https://www.brainyquote.com/quotes/anton_chekhov_105581?src=t_summer");
        quoteSelect.html("“People don't notice whether it's winter or summer<br>when they're happy.”<br><br>― Anton Chekhov");
        quoteSelect.style('color', '#191970');
    }
} // close function changeQuote
