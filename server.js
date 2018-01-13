 var express = require("express");
 var app = express();

 app.use(express.static(__dirname));
 app.use(express.static(__dirname + "/bower_components"));
 app.use(express.static(__dirname + "/client"));

 /* serves main page */
 app.get('*', function(req, res) {
     res.sendFile('./client/index.html', {root: '.'});
 });

 var port = process.env.PORT || 5000;

 app.listen(port, function() {
   console.log("Listening on " + port);
 });
