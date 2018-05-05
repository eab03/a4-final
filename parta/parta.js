// VARIABLES

// variables for URL data
let state;
let city;

// API URLs
let apiForecast = 'http://api.wunderground.com/api/5b37b87ef74e36fa/forecast/q/';
let apiConditions = 'http://api.wunderground.com/api/5b37b87ef74e36fa/conditions/q/';
let apiAstronomy = 'http://api.wunderground.com/api/5b37b87ef74e36fa/astronomy/q/';
let fileType = '.json';

let urlForecast;
let urlConditions;
let urlAstronomy;

// Code based on DGMD E12 Week 10, Part 2
function setup() {

    city = 'Cambridge';
    state = 'MA';

    let urlForecast = apiForecast + state + '/' + city + fileType;
    let urlConditions = apiConditions + state + '/' + city + fileType;
    let urlAstronomy = apiAstronomy + state + '/' + city + fileType;

    loadJSON(urlForecast, gotDataForecast);
    loadJSON(urlConditions, gotDataConditions);
    loadJSON(urlAstronomy, gotDataAstronomy);

    //https://p5js.org/examples/dom-input-and-button.html
    //select the button element on the page
    let button = select('#submit');
    // when the button is pressed, run the getnewForecast function
    button.mousePressed(getnewForecast);
}

function draw() {}
