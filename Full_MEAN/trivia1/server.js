var express = require("express");
var app = express();
var bp = require("body-parser");
var session = require("express-session");
var path = require("path");
var port = 8010;

app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(bp.json());
app.use(session({secret: "password"}));

require('./server/config/routes')(app);
require('./server/config/mongoose')

app.listen(port, function(){
  console.log(`listening on ${port}`);
})