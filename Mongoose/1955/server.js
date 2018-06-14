const express = require("express");
const app = express();
const bp = require("body-parser");
const path = require("path");
const session = require("express-session");
const port = 8012;
app.use(express.static(path.join(__dirname, "./client")));
app.use(bp.json());
app.use(session({secret: "nottelling"}));

require("./config/mongoose");
require("./config/routes")(app);

app.listen(port, function(){
  console.log(`listening on ${port}`)
})