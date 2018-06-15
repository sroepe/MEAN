const express = require("express");
const app = express();
const path = require("path");
const bp = require("body-parser");
const port = 8010;
const session = require("express-session");
app.use(express.static(path.join(__dirname, "./client")));
app.use(bp.json());

app.use(session({secret: "nottelling"}));

require("./config/mongoose")
require("./config/routes")(app);




app.listen(port, function(){
  console.log(`listening on ${port}`)
})