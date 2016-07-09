var express = require('express');
var app = express();
/* serves main page */
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/app/index.html')
})
/* serves other static files */;
app.use(express.static('./'));
app.use(express.static('./app/'));
console.log("WeatherNerdzzz started on port 3000!");
app.listen(3000);