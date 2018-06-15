var express = require("express");
    app = express();
    path = require("path");
    bp = require("body-parser");
    session = require("express-session");
    port = 8055;

app.use(express.static(path.join(__dirname, "client/dist")));
app.use(session({secret:"nottelling"}));
app.use(bp.json());

require('./server/config/routes')(app);
require('./server/config/mongoose');


app.listen(port, function(){
  console.log(`listening on ${port}`);
})
