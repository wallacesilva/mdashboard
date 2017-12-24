// on ready/document ready
document.addEventListener('DOMContentLoaded', function () {

});

function require(url) {

}

function jsWeather(url) {
    
    var request = new XMLHttpRequest(); 
    var response;

    request.open("GET", url, true); 
    request.onreadystatechange = function () { 
        if (request.readyState != 4 || request.status != 200) return; 
        response = request.responseText;

        // process response
        console.log(response);

        /*
        response.query.results.channel.location.city
        response.query.results.channel.location.region
        response.query.results.channel.location.region
        response.query.results.channel.item.condition.temp
        response.query.results.channel.units.temperature
        */
        response = JSON.parse(response);

        degree = response.query.results.channel.item.condition.temp;
        unit_temp = response.query.results.channel.units.temperature;

        if (unit_temp == 'F' || unit_temp == 'f') {
            degree = (degree - 32) / 1.8000;
            unit_temp = 'C';
        }

        document.querySelector('.weather-location').innerText = response.query.results.channel.location.city + ' / ' + response.query.results.channel.location.region;
        document.querySelector('.weather-degree').innerText = degree;
        document.querySelector('.weather-temp').innerText = unit_temp;

    }; 
    request.send();
}

jsWeather('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22rio%20das%20ostras%2C%20rj%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');

var hoursHand = document.getElementById('hoursHand'),
  minutesHand = document.getElementById('minutesHand'),
  secondsHand = document.getElementById('secondsHand'),
  date,
  hours,
  minutes,
  seconds;

function updateHands() {
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();

  if (hours > 12) {
    hoursHand.style.webkitTransform = 'translate(-50%, 25%) rotate(' + ((hours - 12) * 30 + minutes * 0.5) + 'deg)';
    hoursHand.style.transform = 'translate(-50%, 25%) rotate(' + ((hours - 12) * 30 + minutes * 0.5) + 'deg)';
  } else if (hours <= 12) {
    hoursHand.style.webkitTransform = 'translate(-50%, 25%) rotate(' + ((hours * 30) + minutes * 0.5) + 'deg)';
    hoursHand.style.transform = 'translate(-50%, 25%) rotate(' + ((hours * 30) + minutes * 0.5) + 'deg)';
  }

  minutesHand.style.webkitTransform = 'translate(-50%, 25%) rotate(' + (minutes) * 6 + 'deg)';
  minutesHand.style.transform = 'translate(-50%, 25%) rotate(' + (minutes) * 6 + 'deg)';

  secondsHand.style.webkitTransform = 'translate(-50%, 25%) rotate(' + (seconds) * 6 + 'deg)';
  secondsHand.style.transform = 'translate(-50%, 25%) rotate(' + (seconds) * 6 + 'deg)';
}
updateHands();

/* analog clock */
function updateClockAnalog() {
    updateHands();
}

/* digital clock */
function updateClockDigital() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    if (hours < 10)
        hours='0'+hours;
    if (minutes < 10)
        minutes='0'+minutes;
    if (seconds < 10)
        seconds='0'+seconds;

    txt_date = hours+':'+minutes+':'+seconds;

    document.querySelector('.clock-digital-text').innerText = txt_date;
}

window.setInterval(function() {
    
    updateClockAnalog(); // analog clock
    updateClockDigital(); // digital clock

}, 1000);


