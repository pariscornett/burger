//set up dependencies
var express = require("express");

var app = express();

var PORT = port.env.PORT || 8080;


//listener 
app.listen(PORT, function() {
    console.log("App listening on PORT: http://localhost:" + PORT);
};