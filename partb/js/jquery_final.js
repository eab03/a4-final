/* Liz Bright - JS for Final Project */

    window.onload = function() {

        /* ajax call 1 for current forecast
         * references for ajax code:
           http://api.jquery.com/jQuery.getJSON/
           https://dev.socrata.com/docs/cors-and-jsonp.html
           http://stackoverflow.com/questions/37938682/jquery-ajax-request-async-false
        */

        $.ajax({
            url: "http://api.wunderground.com/api/5b37b87ef74e36fa/forecast/q/MA/Cambridge.json",
            method: "GET",
            dataType: "json",
            timeout: 10000,
            success: function(data, status,jqxhr) {
                console.log("Request received:", data);
            },
            error: function(jqxhr,status, error) {
                console.log("Something went wrong!");
            }
            }).done(function(data) {
                console.log(data);

            var forecastToday = data.forecast.txt_forecast.forecastday[3].fcttext;
            var forecast = document.getElementById("forecast");
            forecast.textContent += forecastToday;
            });

        // ajax call 2 for current conditions
        $.ajax({
            url: "http://api.wunderground.com/api/5b37b87ef74e36fa/conditions/q/MA/Cambridge.json",
            method: "GET",
            dataType: "json",
            timeout: 10000,
            success: function(data, status, jqxhr) {
                console.log("Request received:", data);
            },
            error: function(jqxhr,status, error) {
                console.log("Something went wrong!");
            }
        }).done(function(data) {
                console.log(data);

            var timeNow = data.current_observation.local_time_rfc822;
            var time = document.getElementById("time");
            time.textContent += timeNow;

            var tempF = data.current_observation.temp_f;
            var temp = document.getElementById("temperature");
            var inputTemp = document.getElementById("inputTemperature");
            temp.textContent += Number(tempF);
            inputTemp.value += Number(tempF);
            //console.log(tempF);
            //console.log(inputTemp.value);

            var windspeedMPH = data.current_observation.wind_mph;
            var windspeed = document.getElementById("windSpeed");
            var inputWind = document.getElementById("inputWind");
            windspeed.textContent += Number(windspeedMPH);
            inputWind.value += Number(windspeedMPH);

            var winddirectionToday = data.current_observation.wind_dir;
            var winddirection = document.getElementById("windDirection");
            winddirection.textContent += winddirectionToday;

            var precipitationToday = data.current_observation.precip_today_string;
            var precipitation = document.getElementById("precipitation");
            precipitation.textContent += precipitationToday;

            var lastUpdated = data.current_observation.observation_time;
            var update = document.getElementById("update");
            update.textContent += lastUpdated;

            var forecastToday = data.current_observation.forecast_url;
            var forecastURL = document.getElementById("forecastURL");
            forecastURL.textContent += forecastToday;
            });

        // ajax call 3 for astronomical conditions
        $.ajax({
            url: "http://api.wunderground.com/api/5b37b87ef74e36fa/astronomy/q/MA/Cambridge.json",
            method: "GET",
            dataType: "json",
            timeout: 10000,
            success: function(data, status,jqxhr) {
                console.log("Request received:", data);
            },
            error: function(jqxhr,
                status, error) {
                console.log("Something went wrong!");
            }
        }).done(function(data) {
                console.log(data);

            var sunriseHour = data.moon_phase.sunrise.hour;
            var sunriseMin = data.moon_phase.sunrise.minute;
            var sunrise = document.getElementById("sunrise");
            var sunriseTime = sunriseHour + sunriseMin;
            sunriseTime = Number(sunriseTime);
            sunrise.textContent += sunriseHour + ":" + sunriseMin + " am";
            //console.log(typeof sunriseTime);
            //console.log(sunriseTime);

            var sunsetHour = data.moon_phase.sunset.hour;
            var sunsetMin = data.moon_phase.sunset.minute;
            var sunset = document.getElementById("sunset");
            var sunsetTime = sunsetHour + sunsetMin;
            sunsetTime = Number(sunsetTime);
            sunset.textContent += sunsetHour + ":" + sunsetMin + " pm";
            //console.log(sunsetTime);
            //console.log(typeof sunsetTime);

            var currentHour = data.moon_phase.current_time.hour;
            var currentMin = data.moon_phase.current_time.minute;
            var currentTime = currentHour + currentMin;
            currentTime = Number(currentTime);
            //console.log(currentTime)

            var div = document.getElementById("canvas3");
            var div2 = document.getElementById("canvas4");
            var header = document.querySelector("header");
            var h1 = document.querySelector("h1");
            var h2 = document.querySelector("h2");
            var form = document.getElementById("formWeather");
            var legend = document.getElementById("legend");

            /* change styles of various stylistic elements on the page based on the
            live data conditions for sunrise and sunset */
            if (currentTime < sunriseTime && currentTime > sunsetTime) {
                div.style.backgroundColor = "grey";
                div2.style.backgroundColor = "grey";
                form.style.backgroundColor = "#d3d3d3";
                header.style.backgroundColor = "black";
                h1.style.color = "white";
                h2.style.color = "white";
                legend.style.color = "black";
            } else if (currentTime > sunriseTime && currentTime < sunsetTime) {
                div.style.backgroundColor = "orange";
                div2.style.backgroundColor = "orange";
                form.style.backgroundColor = "white";
                header.style.backgroundColor = "#393939"
                h1.style.color = "orange";
                h2.style.color = "orange";
                legend.style.color = "orange";
            }

            // add new span to the page
            var illuminated = data.moon_phase.percentIlluminated;
            var span = document.createElement("span");
            var node = document.createTextNode("Illumination of the Moon: " + illuminated + "%");
            span.appendChild(node);

            var element = document.getElementById("moon");
            var child = document.getElementById("sunset");
            element.appendChild(span, child);
            //console.log(illuminated + "%")
            });

        /* change small images on mouseover and mouseout, with delay
         * references: https://api.jquery.com/delay/
        */
        (function() {

            $("#photo1").mouseover(function() {
                $(this).attr("src",
                    "https://s3.amazonaws.com/eabdgmde15/pomes_images/winter/winter5.jpg").delay(75).fadeIn(200);;
                    },
                function() {
                    $(this).attr("src",
                        "https://s3.amazonaws.com/eabdgmde15/pomes_images/winter/winter2.jpg").delay(125).fadeIn(200);
                });
            $("#photo1").mouseout(function() {
                    $(this).attr("src",
                        "https://s3.amazonaws.com/eabdgmde15/pomes_images/winter/winter2.jpg").delay(50).fadeIn(200);
                },
                function() {
                    $(this).attr("src",
                        "https://s3.amazonaws.com/eabdgmde15/pomes_images/fall/fall1.jpg").delay(75).fadeIn(200);
                });

            })();

            (function() {

                $("#photo2").mouseover(function() {
                        $(this).attr("src",
                            "https://s3.amazonaws.com/eabdgmde15/pomes_images/winter/winter3.jpg").delay(75).fadeIn(200);
                    },
                    function() {
                        $(this).attr("src",
                            "https://s3.amazonaws.com/eabdgmde15/pomes_images/winter/winter4.jpg").delay(125).fadeIn(200);
                    });
                $("#photo2").mouseout(function() {
                        $(this).attr("src",
                            "https://s3.amazonaws.com/eabdgmde15/pomes_images/winter/winter4.jpg").delay(50).fadeIn(200);
                    },
                    function() {
                        $(this).attr("src",
                            "https://s3.amazonaws.com/eabdgmde15/pomes_images/fall/fall2.jpg").delay(75).fadeIn(200);
                    });

            })(); // close code for small photographs

        /* js for canvas functions
         * References:
         * The base code for the animated circles is directly based on a class example
           in the CSCIE-3 class (week 14) at Harvard Extension School by the instructor
           Larry Bouthillier. As cited in his code, it was "Inspired by an idea from
           David Geary: , http://corehtml5canvas.com/,
           http://corehtml5canvas.com/code-live/ch01/example-1.8/example.html "
        *  Additional references:
           https://www.kirupa.com/html5/animating_many_things_on_a_canvas.htm
        */

        // code for first canvas
        (function() {

            var canvas1 = document.getElementById("canvas1");
            var ctx = canvas1.getContext('2d');

            var form = document.forms.weatherForm;
            var tempForm = form.elements.inputTemperature;
            var tempNumber = document.getElementById("inputTemperature");
            var temp;

            /* add event listener to change background color of canvas based on
            the value of the temperature input on the form */
            tempForm.addEventListener("input", function() {
            temp = tempNumber.value;
            temp = Number(temp);
            //console.log(temp);
            //console.log(typeof temp);

            // validate if input in temperature field is correct
            if (temp > 120 || temp < -50) {
                alert("Number must be between -50 and 120!");
                document.getElementById("inputTemperature").value = " ";
                canvas1.style.backgroundColor = "#FFF6E6";
            }
            if (temp == 0) {
                canvas1.style.backgroundColor = "#FFF6E6";
            } else if (temp > 0 && temp <= 2) {
                canvas1.style.backgroundColor = "#01295F";
            } else if (temp > 3 && temp <= 4) {
                canvas1.style.backgroundColor = "#22547B";
            } else if (temp > 5 && temp <= 7) {
                canvas1.style.backgroundColor = "#437F97";
            } else if (temp > 8 && temp <= 12) {
                canvas1.style.backgroundColor = "#437F97";
            } else if (temp > 13 && temp <= 17) {
                canvas1.style.backgroundColor = "#63895D";
            } else if (temp > 18 && temp <= 24) {
                canvas1.style.backgroundColor = "#849324";
            } else if (temp > 25 && temp <= 34) {
                canvas1.style.backgroundColor = "#FFB30F";
            } else if (temp > 35 && temp <= 44) {
                canvas1.style.backgroundColor = "#C1A319";
            } else if (temp > 45 && temp <= 69) {
                canvas1.style.backgroundColor = "#FD151B";
            } else if (temp > 70 && temp <= 99) {
                canvas1.style.backgroundColor = "#FE6415";
            } else {
            }
        });

            /* use object constructor to create code individual circle that can be
            replicated */
            function Circle(x, y, r, color) {
                this.x = x+10;
                this.y = x+10;
                this.r = r;
                this.color = (function() {
                    if (color === "random") {
                        return 'rgba(' +
                            (Math.random() * 100).toFixed(0) + ', ' + (Math.random() * 100).toFixed(0) + ', ' +
                            (Math.random() * 100).toFixed(0) + ', 1)'
                    }
                    else {
                        return color;
                    }
                })();
                this.vX = 2 * Math.random(); // velocity
                this.vY = 2 * Math.random(); // velocity
            }

            // draw the circle
            Circle.prototype.draw = function() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);

                ctx.fillStyle = this.color;
                ctx.fill();
            }


            // establish boundry of the canvas for circle(s) to move within
            Circle.prototype.move = function() {
                if (this.x + this.vX + this.r >
                    ctx.canvas.width || this.x + this.vX - this.r < 0) {
                    this.vX = -this.vX;
                }
                if (this.y + this.vY + this.r > ctx.canvas.height || this.y + this.vY - this.r < 0) {
                    this.vY = -this.vY;
                }
                this.x += this.vX;
                this.y += this.vY;
            }

            // create multiple static circles of random sizes that are placed randomly on the page
            var circles = [];

            for (var i = 0; i < 10; ++i) {
                circles[i] = new Circle(Math.random() * 110, Math.random() * 150, 10 * Math.random(), "random");
            }

            function createCircles() {
                circles.forEach(function(circle) {
                    circle.draw();
                });
            }
            createCircles();
            // add event listener to animate circles only on mouseover of the canvas
            canvas1.addEventListener("mouseover", function() {

                function animateCircles() {
                    circles.forEach(function(circle) {
                        circle.move();
                        circle.draw();
                });
                }
                var x = setInterval(function() {
                    ctx.clearRect(0, 0, ctx.canvas.width,
                        ctx.canvas.height);
                    animateCircles();
                }, 30);

                // add event listener to stop the animation and reset the color of the canvas
                var stop = document.querySelector(".stop");

                stop.addEventListener("click", function() {
                    clearInterval(x);
                    canvas1.style.backgroundColor = "#FFF6E6";
                }, 0);
            });

        })(); // close canvas 1

        // code for second canvas
        (function() {

            var canvas2 = document.getElementById("canvas2");
            var ctx2 = canvas2.getContext('2d');

            var form = document.forms.weatherForm;
            var windForm = form.elements.inputWind;
            var windNumber = document.getElementById("inputWind");
            var wind;

            /* add event listener to change background color of canvas based on
            the value of the wind input on the form */
            windForm.addEventListener("input", function() {
                wind = windNumber.value;
                wind = Number(wind);
                //console.log(wind);
                //console.log(typeof wind);

                // validate if input in wind field is correct
                if (wind > 100 || wind < 0) {
                    alert("Number must be between 0 and 100!");
                    document.getElementById("inputWind").value = " ";
                    canvas2.style.backgroundColor = "#FFF6E6";
                }

                if (wind == 0) {
                    canvas2.style.backgroundColor = "#FFF6E6";
                } else if (wind > 0 && wind <= 2) {
                    canvas2.style.backgroundColor = "#01295F";
                } else if (wind > 3 && wind <= 4) {
                    canvas2.style.backgroundColor = "#22547B";
                } else if (wind > 5 && wind <= 7) {
                    canvas2.style.backgroundColor = "#437F97";
                } else if (wind > 8 && wind <= 12) {
                    canvas2.style.backgroundColor = "#437F97";
                } else if (wind > 13 && wind <= 17) {
                    canvas2.style.backgroundColor = "#63895D";
                } else if (wind > 18 && wind <= 24) {
                    canvas2.style.backgroundColor = "#849324";
                } else if (wind > 25 && wind <= 34) {
                    canvas2.style.backgroundColor = "#FFB30F";
                } else if (wind > 35 && wind <= 44) {
                    canvas2.style.backgroundColor = "#C1A319";
                } else if (wind > 45 && wind <= 69) {
                    canvas2.style.backgroundColor = "#FD151B";
                } else if (wind > 70 && wind <= 99) {
                    canvas2.style.backgroundColor = "#FE6415";
                } else {
                }
            });

            /* use object constructor to create code individual circle that can be
            replicated */
            function Circle(x, y, r, color) {
                this.x = x+10;
                this.y = x+10;
                this.r = r;
                this.color = (function() {
                    if (color === "random") {
                        return 'rgba(' +
                            (Math.random() * 100).toFixed(0) + ', ' + (Math.random() * 100).toFixed(0) + ', ' +
                            (Math.random() * 100).toFixed(0) + ', 1)'
                    } else {
                        return color;
                    }
                })();
                this.vX = 4 * Math.random(); // velocity
                this.vY = 4 * Math.random(); //velocity
            }

            // draw the circle
            Circle.prototype.draw = function() {
                ctx2.beginPath();
                ctx2.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);

                ctx2.fillStyle = this.color;
                ctx2.fill();
            }

            // establish boundry of the canvas for circle(s) to move within
            Circle.prototype.move = function() {
                if (this.x + this.vX + this.r >
                    ctx2.canvas.width || this.x + this.vX - this.r < 0) {
                    this.vX = -this.vX;
                }
                if (this.y + this.vY + this.r > ctx2.canvas.height || this.y + this.vY - this.r < 0) {
                    this.vY = -this.vY;
                }
                this.x += this.vX;
                this.y += this.vY;
            }

            // create multiple static circles of random sizes that are placed randomly on the page
            var circles = [];

            for (var i = 0; i < 10; ++i) {
                circles[i] = new Circle(Math.random() * 110, Math.random() * 150, 12 * Math.random(), "random");
            }

            function createCircles() {
                circles.forEach(function(circle) {
                    circle.draw();
                });
            }
            createCircles();

            // add event listener to animate circles only on mouseover of the canvas
            canvas2.addEventListener("mouseover", function() {

                function animateCircles() {
                    circles.forEach(function(circle) {
                        circle.move();
                        circle.draw();
                    });
                }
                var x = setInterval(function() {
                    ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
                    animateCircles();
                }, 30);

                // add event listner to stop animation of the circles on mouseout
                var stop = document.querySelector(".stop");

                // add event listener to stop the animation and reset the color of the canvas
                stop.addEventListener("click", function() {
                    clearInterval(x);
                    canvas2.style.backgroundColor = "#FFF6E6";
                }, 0);
            });

        })(); // close canvas 2

    } // close on load function
