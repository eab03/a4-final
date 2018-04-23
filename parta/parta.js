// DGMD E12 Week 10, Part 2

// Grab the temperature at any zip code



// API URLS

var state = "MA";
var city = "Cambridge";

var apiConditions = "http://api.wunderground.com/api/5b37b87ef74e36fa/conditions/q/";
var apiForecast = "http://api.wunderground.com/api/5b37b87ef74e36fa/forecast/q/";
var apiAstronomy = "http://api.wunderground.com/api/5b37b87ef74e36fa/astronomy/q/";
var fileType = ".json";

var urlConditions;
var urlForecast;
var urlAstronomy;

// variables to hold our weather data
var conditions;
var forecast;
var astronomy;

// variable for today's forecast
// based on the 'forecast' URL
var forecastToday;
var forecast;

// variables for current conditions
// based on the 'current conditions' URL
var clocationFull;
var clocation;
var timeNow;
var time;
var tempF;
var tempC;
var temp;
var precipitationToday;
var precipitation;
var windspeedMPH;
var windspeedKMH;
var windspeed;
var winddirectionToday;
var winddirection;

// variable for sunrise, sunset time and moon phase and illumination
// based on astronomy URL
var sunriseHour;
var sunriseMin;
var sunriseTime;
var sunsetHour;
var sunsetMin;
var sunsetTime;
var illuminated;
var illumination;
var currentHour;
var currentMin;
var currentTime;

function setup() {

    city = "Cambridge";
    state = "MA";

    var urlConditions = apiConditions + state + "/" + city + fileType;
    var urlForecast = apiForecast + state + "/" + city + fileType;
    var urlAstronomy = apiAstronomy + state + "/" + city + fileType;

    loadJSON(urlConditions, gotDataConditions);
    loadJSON(urlForecast, gotDataForecast);
    loadJSON(urlAstronomy, gotDataAstronomy);

    //https://p5js.org/examples/dom-input-and-button.html
    //select the button element on the page
    var button = select('#submit');
    // when the button is pressed, run the getTemp function
    button.mousePressed(getnewForecast);

}

// // gets the temperature of the location of interest (based on zip code)
function getnewForecast() {

    city = select('#city').value();
    state = select('#state').value();

    // concatenate all the strings together to make the url
    var urlConditions = apiConditions + state + "/" + city + fileType;
    var urlForecast = apiForecast + state + "/" + city + fileType;
    var urlAstronomy = apiAstronomy + state + "/" + city + fileType;

    loadJSON(urlConditions, gotDataConditions);
    loadJSON(urlForecast, gotDataForecast);
    loadJSON(urlAstronomy, gotDataAstronomy);
}

// the callback from loadJSON sends 'data' automatically!
function gotDataForecast(myDataForecast) {
    forecast = myDataForecast;

    forecastToday = forecast.forecast.txt_forecast.forecastday[0].fcttext;
    forecast = select("#forecast");
    forecast.html(forecastToday);
}

// the callback from loadJSON senwds 'data' automatically!
function gotDataConditions(myDataConditions) {
    conditions = myDataConditions;

    clocationFull = conditions.current_observation.display_location.full;
    clocation = select("#location");
    clocation.html(clocationFull);

    timeNow = conditions.current_observation.local_time_rfc822;
    time = select("#time");
    time.html(timeNow);

    tempF = conditions.current_observation.temp_f;
    tempC = conditions.current_observation.temp_c;
    temp = select("#temperature");
    temp.html(tempF + 'f' + '/' + tempC + 'c');

    windspeedMPH = conditions.current_observation.wind_mph;
    windspeedKPH = conditions.current_observation.wind_kph
    windspeed = select("#windSpeed");
    windspeed.html(windspeedMPH + 'mph' + '/' + windspeedKPH + 'kph');

    winddirectionToday = conditions.current_observation.wind_dir;
    winddirection = select("#windDirection");
    winddirection.html(winddirectionToday);

    precipitationToday = conditions.current_observation.precip_today_string;
    precipitation = select("#precipitation");
    precipitation.html(precipitationToday);
}

function gotDataAstronomy(myDataAstronomy) {
    astronomy = myDataAstronomy;

    sunriseHour = astronomy.moon_phase.sunrise.hour;
    sunriseMin = astronomy.moon_phase.sunrise.minute;
    sunrise = select("#sunrise");
    sunrise.html(sunriseHour + ":" + sunriseMin + " am");

    sunsetHour = astronomy.moon_phase.sunset.hour;
    sunsetMin = astronomy.moon_phase.sunset.minute;
    sunsetTime = sunsetHour + sunsetMin;
    sunset = select("#sunset");
    sunset.html(sunsetHour + ":" + sunsetMin + " pm");

    currentHour = astronomy.moon_phase.current_time.hour;
    currentMin = astronomy.moon_phase.current_time.minute;
    currentTime = currentHour + currentMin;

    // add new spans to the page
    illuminated = astronomy.moon_phase.percentIlluminated;
    illumination = select("#illumination");
    illumination.html(illuminated + "%");
}


function draw() {}
