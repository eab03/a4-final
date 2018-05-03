// CREATE VARIABLES
let clocation;
let location1 = 'Cambridge, MA';
let location2 = 'Boston, MA';

let imgSpring, imgSummer, imgFall, imgWinter;
let imgSpring2, imgFall2, imgWinter2;

let randomImgSpring;

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
let buttonDescription;

let forwardButton;

let quoteSelect;

// let forwardButton;

// LOAD IMAGES AND SOUND FILES
function preload() {
    imgSpring = loadImage('../images/spring2.jpg');
    imgSpring2 = loadImage('../images/spring3.jpg');
    imgSummer = loadImage('../images/summer2.jpg');
    imgFall = loadImage('../images/fall1.jpg');
    imgFall2 = loadImage('../images/fall5.jpg');
    imgWinter = loadImage('../images/winter2.jpg');
    imgWinter2 = loadImage('../images/winter3.jpg');


    // https://p5js.org/reference/#/p5.SoundFile
    soundFormats('mp3');
    springSound = loadSound('../assets/Rain-SoundBible.com-176235038.mp3');
    summerSound = loadSound('../assets/Sunny Day-SoundBible.com-2064222612.mp3');
    fallSound = loadSound('../assets/Wind-Mark_DiAngelo-1940285615.mp3');
    winterSound = loadSound('../assets/Snowing-SoundBible.com-495580994.mp3');
}

function setup() {
    let canvas = createCanvas(400, 266.66);
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


    // button = select('#forwardButton');
    // button.html('<i class="fa fa-play" aria-hidden="true"></i>');


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

    forwardButton = select('#forwardButton');
    forwardButton.hide();
    forwardButton.html('<i class="fa fa-angle-right" aria-hidden="true"></i>');

    backButton = select('#backButton');
    backButton.hide();
    backButton.html('<i class="fa fa-angle-left" aria-hidden="true"></i>');


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
// https://css-tricks.com/snippets/javascript/select-random-item-array/
function mySelectEvent() {
    let selected = this.selected();
    clocation = select('#location');
    buttonDescription = select('#buttonDescription');
    button.show();
    forwardButton.show();
    backButton.show();

    if (selected === 'The Four Seasons') {
        background(imgSpring2);
        clocation.html(location1);
        quoteSelect.html(seasonQuote);
        buttonDescription.html('');
        button.hide();
        backButton.hide();
        forwardButton.hide();

    } else if (selected === 'Spring') {
        image(imgSpring, 0, 0, 400, 266.66);
        spring();
        clocation.html(location1);
        quoteSelect.html(springQuote);
        buttonDescription.html('rain');
        sound = springSound;

    } else if (selected === 'Summer') {
        image(imgSummer, 0, 0, 400, 266.66);
        summer();
        clocation.html(location1);
        quoteSelect.html(summerQuote);
        buttonDescription.html('sun');
        sound = summerSound;

    } else if (selected === 'Fall') {
        image(imgFall, 0, 0, 400, 266.66);
        fall();
        clocation.html(location1);
        quoteSelect.html(fallQuote);
        buttonDescription.html('winds');
        sound = fallSound;

    } else if (selected === 'Winter') {
        image(imgWinter, 0, 0, 400, 266.66);
        winter();
        clocation.html(location1);
        quoteSelect.html(winterQuote);
        buttonDescription.html('snow');
        sound = winterSound;
    }
} // close function mySelectEvent

function spring() {
    let imgSpringArray = [imgSpring, imgSpring2];
    counter = 0;

    forwardButton.mousePressed(function() {
        for (i = 0; i < imgSpringArray.length; i++) {
            image(imgSpringArray[i], 0, 0, 400, 266.66);
            counter++;
        }
    });
    backButton.mousePressed(function() {
        counter = 0;
        for (i = 0; i < imgSpringArray.length; i--) {
            image(imgSpringArray[i], 0, 0, 400, 266.66);
            counter--;
        }
    });
}


function summer() {
    let imgSummerArray = [imgSummer];
    counter = 0;

    forwardButton.mousePressed(function() {
        for (i = 0; i < imgSummerArray.length; i++) {
            image(imgSummerArray[i], 0, 0, 400, 266.66);
            counter++;
        }
    });
    backButton.mousePressed(function() {
        counter = 0;
        for (i = 0; i < imgSummerArray.length; i--) {
            image(imgSummerArray[i], 0, 0, 400, 266.66);
            counter--;
        }
    });
}

function fall() {
    let imgFallArray = [imgFall, imgFall2];
    counter = 0;

    forwardButton.mousePressed(function() {
        for (i = 0; i < imgFallArray.length; i++) {
            image(imgFallArray[i], 0, 0, 400, 266.66);
            counter++;
        }
    });
    backButton.mousePressed(function() {
        counter = 0;
        for (i = 0; i < imgFallArray.length; i--) {
            image(imgFallArray[i], 0, 0, 400, 266.66);
            counter--;
        }
    });
}

function winter() {
    let imgWinterArray = [imgWinter, imgWinter2];
    counter = 0;

    forwardButton.mousePressed(function() {
        for (i = 0; i < imgWinterArray.length; i++) {
            image(imgWinterArray[i], 0, 0, 400, 266.66);
            counter++;
        }
    });
    backButton.mousePressed(function() {
        counter = 0;
        for (i = 0; i < imgWinterArray.length; i--) {
            image(imgWinterArray[i], 0, 0, 400, 266.66);
            counter--;
        }
    });
}
