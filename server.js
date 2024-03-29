
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);

require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
