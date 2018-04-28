// CREATE VARIABLES
let clocation;
let location1 = 'Cambridge, MA';
let location2 = 'Boston, MA';

let imgSpring, imgSummer, imgFall, imgWinter;
let imgSpring2;

// https://www.goodreads.com/quotes/tag/seasons
// http://www.azquotes.com/quotes/topics/spring-rain.html
// https://www.goodreads.com/quotes/tag/summer.html
// http://www.azquotes.com/quotes/topics/autumn-wind.html
// ******* add source for winter quote

let seasonQuote = 'In the depth of winter, I finally learned that within me there <br>lay an invincible summer. ― Albert Camus';
let springQuote = 'Spring <span>rain</span> conveyed under the trees in drops.<br>―Matsuo Basho';
let summerQuote = 'Let us dance in the <span>sun</span>, wearing wild flowers in our hair...<br>―Susan Polis Schutz';
let fallQuote = 'Wild is the music of autumnal <span>winds</span> Amongst the faded <br>woods. ―William Wordsworth';
let winterQuote = 'Outside, <span>snow</span> solidified itself into graceful forms. The peace <br>of winter stars seemed permanent. ―Toni Morrison, Beloved';

let sound;
let springSound, summerSound, fallSound, winterSound;
let button;

let quoteSelect;

// LOAD IMAGES AND SOUND FILES
function preload() {
    imgSpring = loadImage('images/spring2.jpg');
    imgSummer = loadImage('images/summer2.jpg');
    imgFall = loadImage('images/fall1.jpg');
    imgWinter = loadImage('images/winter2.jpg');
    imgSpring2 = loadImage('images/spring3.jpg');

    // https://p5js.org/reference/#/p5.SoundFile
    soundFormats('mp3');
    springSound = loadSound('assets/Rain-SoundBible.com-176235038.mp3');
    summerSound = loadSound('assets/Sunny Day-SoundBible.com-2064222612.mp3');
    fallSound = loadSound('assets/Wind-Mark_DiAngelo-1940285615.mp3');
    winterSound = loadSound('assets/Snowing-SoundBible.com-495580994.mp3');
}

function setup() {
    let canvas = createCanvas(400, 266.666);
    canvas.position(125, 75);
    canvas.parent('mycontainer');
    background(imgSpring2);

    // CREATE DROPDOWN MENU
    // https://github.com/processing/p5.js/issues/1864
    // https://gist.github.com/shiffman/7549e5225c042ee25a80
    dropdown = createSelect();
    dropdown.parent('mycontainer');
    dropdown.addClass("dropdown");
    dropdown.option('The Four Seasons');
    dropdown.option('Spring');
    dropdown.option('Summer');
    dropdown.option('Fall');
    dropdown.option('Winter');

    dropdown.changed(mySelectEvent);

    // CREATE THE ELEMENT FOR THE QUOTATION
    quoteSelect = createP("");
    dropdown.parent('mycontainer');
    quoteSelect.addClass('quote');

    // CREATE BUTTONS FOR SOUND
    // Week 13 class notes: http://coursescript.com/notes/interactivecomputing/sound/
    // https://forum.processing.org/two/discussion/13494/what-s-the-best-way-of-telling-when-a-sound-file-has-finished-playing
    // button to toggle play/pause

    button = select('#playButton');
    button.hide();
    button.html('<i class="fa fa-play" aria-hidden="true"></i>');

    resetIcon = function() {
        button.html('<i class="fa fa-play" aria-hidden="true"></i>');;
    }

    button.mousePressed(function() {
        if (sound.isPlaying()) {
            button.html('<i class="fa fa-play" aria-hidden="true"></i>');
            // stop the sound if playing
            sound.stop();
        } else {
            // play the sound if paused
            sound.play();
            //toggle the button to show stop icon
            button.html('<i class="fa fa-stop" aria-hidden="true"></i>');
        }
        sound.onended(resetIcon);
    });

} // close function setup

function draw() {}

// LOAD SPECIFIC IMAGE WHEN THE DROPDOWN IS SELECTED
// https://p5js.org/examples/image-load-and-display-image.html
// https://processing.org/reference/PImage_resize_.html
function mySelectEvent() {
    let selected = this.selected();
    clocation = select('#location');
    button.show();

    if (selected === 'The Four Seasons') {
        background(imgSpring2);
        clocation.html(location1);
        quoteSelect.html(seasonQuote);
        button.hide();

    } else if (selected === 'Spring') {
        image(imgSpring, 0, 0, imgSpring.width / 7.5, imgSpring.height / 7.5);
        clocation.html(location1);
        quoteSelect.html(springQuote);
        sound = springSound;

    } else if (selected === 'Summer') {
        image(imgSummer, 0, 0, imgSummer.width / 7.5, imgSummer.height / 7.5);
        clocation.html(location1);
        quoteSelect.html(summerQuote);
        sound = summerSound;

    } else if (selected === 'Fall') {
        image(imgFall, 0, 0, imgFall.width / 7.5, imgFall.height / 7.5);
        clocation.html(location1);
        quoteSelect.html(fallQuote);
        sound = fallSound;

    } else if (selected === 'Winter') {
        image(imgWinter, 0, 0, imgWinter.width / 7.5, imgWinter.height / 7.5);
        clocation.html(location1);
        quoteSelect.html(winterQuote);
        sound = winterSound;
    }
} // close function mySelectEvent
