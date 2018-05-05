// CREATE VARIABLES
let imgSpringArray = [];
let imgSummerArray = [];
let imgFallArray = [];
let imgWinterArray = [];

let randomImg;
let randomButton;
let randomButtonMessage;

// https://www.goodreads.com/quotes/tag/seasons
// http://www.azquotes.com/quotes/topics/spring-rain.html
// https://www.goodreads.com/quotes/tag/summer.html
// http://www.azquotes.com/quotes/topics/autumn-wind.html
// https://www.goodreads.com/quotes/7342983-outside-snow-solidified-itself-into-graceful-forms-the-peace-of

let seasonQuote = 'In the depth of winter, I finally learned that within me there <br>lay an invincible summer. ― Albert Camus';
let springQuote = 'Spring <span>rain</span> conveyed under the trees in drops.<br>―Matsuo Basho';
let summerQuote = 'Let us dance in the <span>sun</span>, wearing wild flowers in our hair...<br>―Susan Polis Schutz';
let fallQuote = 'Wild is the music of autumnal <span>winds</span> Amongst the faded <br>woods. ―William Wordsworth';
let winterQuote = 'Outside, <span>snow</span> solidified itself into graceful forms. The peace <br>of winter stars seemed permanent. ―Toni Morrison, Beloved';
let quoteSelect;

let sound;
let springSound, summerSound, fallSound, winterSound;
let button;
let buttonDescription;
let soundartist;

// LOAD IMAGES AND SOUND FILES
// https://www.youtube.com/watch?v=FVYGyaxG4To
// all images are my own (by Liz Bright)
function preload() {
    for (var i = 0; i < 7; i++) {
        imgSpringArray[i] = loadImage('../images/spring/spring' + i + '.jpg');
    }
    for (var i = 0; i < 7; i++) {
        imgSummerArray[i] = loadImage('../images/summer/summer' + i + '.jpg');
    }
    for (var i = 0; i < 7; i++) {
        imgFallArray[i] = loadImage('../images/fall/fall' + i + '.jpg');
    }
    for (var i = 0; i < 7; i++) {
        imgWinterArray[i] = loadImage('../images/winter/winter' + i + '.jpg');
    }

    imgSeason1 = loadImage('../images/season1.jpg');
    imgSeason2 = loadImage('../images/season2.jpg');

    // https://p5js.org/reference/#/p5.SoundFile
    // http://soundbible.com/1158-Rain.html
    // http://soundbible.com/1661-Sunny-Day.html
    // http://soundbible.com/1810-Wind.html
    // http://soundbible.com/633-Snowing.html
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
    background(imgSeason1);
    soundartist = select('#soundartist');
    soundartist.html('Sounds available on SoundBible.com');

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

    randomButton = select('#randomButton');
    randomButton.hide();
    randomButton.html('');

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
    randombuttonDescription = select('#randombuttonDescription');
    randombuttonDescription.html('');
    randombuttonMessage = 'Change the Image Randomly';
    randomButton.html('');
    randomButton.show();
    buttonDescription = select('#buttonDescription');
    button.show();
    soundartist.html('Sounds available on SoundBible.com');

    if (selected === 'The Four Seasons') {
        background(imgSeason2);
        quoteSelect.html(seasonQuote);
        randombuttonDescription.html('');
        randomButton.hide();
        buttonDescription.html('');
        button.hide();
        soundartist.html('Sounds available on SoundBible.com');

    } else if (selected === 'Spring') {
        image(imgSpringArray[0], 0, 0, 400, 266.66);
        randomButton.mousePressed(function() {
            let randomSpringImg = imgSpringArray[floor(random() * imgSpringArray.length)];
            image(randomSpringImg, 0, 0, 400, 266.66);
        });
        randombuttonDescription.html(randombuttonMessage);
        randomButton.html('<i class="fa fa-umbrella" aria-hidden="true"></i>');
        quoteSelect.html(springQuote);
        buttonDescription.html('Sound of Rain');
        sound = springSound;
        soundartist.html('Sound recorded by Mike Koenig, on SoundBible.com');

    } else if (selected === 'Summer') {
        image(imgSummerArray[0], 0, 0, 400, 266.66);
        randomButton.mousePressed(function() {
            let randomImg = imgSummerArray[floor(random() * imgSummerArray.length)];
            image(randomImg, 0, 0, 400, 266.66);
        });
        randombuttonDescription.html(randombuttonMessage);
        randomButton.html('<i class="fa fa-sun-o" aria-hidden="true"></i>');
        quoteSelect.html(summerQuote);
        buttonDescription.html('Sound of Sun');
        sound = summerSound;
        soundartist.html('Sound recorded by Stephan, on SoundBible.com<br>');

    } else if (selected === 'Fall') {
        image(imgFallArray[0], 0, 0, 400, 266.66);
        randomButton.mousePressed(function() {
            let randomImg = imgFallArray[floor(random() * imgFallArray.length)];
            image(randomImg, 0, 0, 400, 266.66);
        });
        randombuttonDescription.html(randombuttonMessage);
        randomButton.html('<i class="fa fa-cloud" aria-hidden="true"></i>');
        quoteSelect.html(fallQuote);
        buttonDescription.html('Sound of Winds');
        sound = fallSound;
        soundartist.html('Sound recorded by Mark DiAngelo, on SoundBible.com<br>');

    } else if (selected === 'Winter') {
        image(imgWinterArray[0], 0, 0, 400, 266.66);
        randomButton.mousePressed(function() {
            let randomImg = imgWinterArray[floor(random() * imgWinterArray.length)];
            image(randomImg, 0, 0, 400, 266.66);
        });
        randombuttonDescription.html(randombuttonMessage);
        randomButton.html('<i class="fa fa-snowflake-o" aria-hidden="true"></i>');
        quoteSelect.html(winterQuote);
        buttonDescription.html('Sound of Snow');
        sound = winterSound;
        soundartist.html('Sound recorded by Mike Koenig, on SoundBible.com<br>');
    }
} // close function mySelectEvent
