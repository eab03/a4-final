/* p5 code for parta */

// VARIABLES
// variables to hold the weather data
let forecast;
let conditions;
let astronomy;

// variable for today's forecast -- based on the 'forecast' URL
let forecastToday;

// variables for current conditions -- based on the 'current conditions' URL
let clocationFull;
let clocation;
let timeNow;
let time;
let tempF;
let tempC;
let temp;
let precipitationToday;
let precipitation;
let windspeedMPH;
let windspeedKMH;
let windspeed;
let winddirectionToday;
let winddirection;

// variable for sunrise/sunset time and moon phase/illumination -- based on astronomy URL
let sunriseHour;
let sunriseMin;
let sunriseTime;
let sunsetHour;
let sunsetMin;
let sunsetTime;
let illuminated;
let illumination;
let currentHour;
let currentMin;
let currentTime;


// get the forecast of a different location (based on city and state/country inputs)
function getnewForecast() {

    city = select('#city').value();
    state = select('#state').value();

    // concatenate all the strings together to make the url
    let urlForecast = apiForecast + state + '/' + city + fileType;
    let urlConditions = apiConditions + state + '/' + city + fileType;
    let urlAstronomy = apiAstronomy + state + '/' + city + fileType;

    loadJSON(urlForecast, gotDataForecast);
    loadJSON(urlConditions, gotDataConditions);
    loadJSON(urlAstronomy, gotDataAstronomy);
}

// get forecast data
function gotDataForecast(myDataForecast) {
    forecast = myDataForecast;

    forecastToday = forecast.forecast.txt_forecast.forecastday[0].fcttext;
    forecast = select('#forecast');
    forecast.html(forecastToday);
}

// get conditions data
function gotDataConditions(myDataConditions) {
    conditions = myDataConditions;

    clocationFull = conditions.current_observation.display_location.full;
    clocation = select('#location');
    clocation.html(clocationFull);

    timeNow = conditions.current_observation.local_time_rfc822;
    time = select('#time');
    time.html(timeNow);

    tempF = conditions.current_observation.temp_f;
    tempC = conditions.current_observation.temp_c;
    temp = select('#temperature');
    temp.html(tempF + 'f' + '/' + tempC + 'c');

    windspeedMPH = conditions.current_observation.wind_mph;
    windspeedKPH = conditions.current_observation.wind_kph
    windspeed = select('#windSpeed');
    windspeed.html(windspeedMPH + 'mph' + '/' + windspeedKPH + 'kph');

    winddirectionToday = conditions.current_observation.wind_dir;
    winddirection = select('#windDirection');
    winddirection.html(winddirectionToday);

    precipitationToday = conditions.current_observation.precip_today_string;
    precipitation = select('#precipitation');
    precipitation.html(precipitationToday);
}

// get astronomical data
function gotDataAstronomy(myDataAstronomy) {
    astronomy = myDataAstronomy;
    let moonphase;
    let borderleft = select('#borderleft');
    let borderright = select('#borderright');

    sunriseHour = astronomy.moon_phase.sunrise.hour;
    sunriseMin = astronomy.moon_phase.sunrise.minute;
    sunriseTime = Number(sunriseHour + sunriseMin);
    sunrise = select('#sunrise');
    sunrise.html(sunriseHour + ':' + sunriseMin + ' am');

    sunsetHour = astronomy.moon_phase.sunset.hour;
    sunsetMin = astronomy.moon_phase.sunset.minute;
    sunsetTime = Number(sunsetHour + sunsetMin);
    sunset = select('#sunset');
    sunset.html(sunsetHour + ':' + sunsetMin + ' pm');

    currentHour = astronomy.moon_phase.current_time.hour;
    currentMin = astronomy.moon_phase.current_time.minute;
    currentTime = Number(currentHour + currentMin);

    // change color of 'borders' based on time
    if (currentTime > sunriseTime && currentTime < sunsetTime) {
        borderleft.style('background', 'coral');
        borderright.style('background', 'coral');
    } else {
        borderleft.style('background', 'darkgrey');
        borderright.style('background', 'darkgrey');
    }

    illuminated = astronomy.moon_phase.percentIlluminated;
    illumination = select('#illumination');
    illumination.html(illuminated + '%');

    // change color of moon phase if full or 100%
    if (illuminated == 100) {
        moonphase = select('#moonphase');
        moonphase.style('color', 'coral');
    }
}
