 var express = require("express");
 var app = express();

 /* serves main page */
 app.get("/", function(req, res) {
    console.log(req, res);
 });

  app.post("/test", function(req, res) { 
	/* some server side logic */
	console.log('in test');
	res.send("OK");
  });

 var port = process.env.PORT || 5000;
 
 app.listen(port, function() {
   console.log("Listening on " + port);
 });