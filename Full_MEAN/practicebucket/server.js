var express = require("express");
var app = express();
var bp = require("body-parser");
var path = require("path");
var session = require("express-session");
var port = 8100;

app.use(express.static(path.join(__dirname, "client/dist")));
app.use(bp.json());
app.use(session({secret:"nottelling"}));

require('./server/config/routes')(app);
require('./server/config/mongoose');

app.listen(port, function(){
  console.log(`listening on ${port}`);
})