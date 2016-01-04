var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// Allow CORS (Cross-domain Object Requests)
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCrossDomain);

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
  console.log("Listening on port", server.address().port, "...");
});
