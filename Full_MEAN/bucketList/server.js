var express = require("express");
var app = express();
var bp = require("body-parser");
var path = require("path");
var session = require("express-session");
var port = 8103;

app.use(express.static(path.join(__dirname, "client/dist")));
app.use(session({secret:"nottelling"}));
app.use(bp.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);


app.listen(port, function(){
  console.log(`listening on ${port}`);
})