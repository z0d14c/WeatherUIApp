var express = require('express');
var app = express();
var request = require('request');
var darksky_apikey = '966a0fbeb8db29490a90cc9c51ac15b6';
/* serves main page */
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/app/index.html')
});
app.get("/api/weather/:location", function(req, res) {
    // location query is in form LATITUDE,LONGITUDE,TIME
    var apiUrl = 'https://api.forecast.io/forecast/' + darksky_apikey + "/" + req.params.location;
    console.log('url ', apiUrl);
    request(apiUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});
/* serves other static files */
app.use(express.static('./'));
app.use(express.static('./app/'));
console.log("WeatherNerdzzz started on port 3000!");
app.listen(3000);