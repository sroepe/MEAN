const express = require("express");
const app = express();
const bp = require("body-parser");
const session = require("express-session");
const path = require("path");
const port = 8001;
app.use(express.static(path.join(__dirname, "/client/dist")));
app.use(session({secret:"nottelling"}));
app.use(bp.json());

app.listen(port, function(){
  console.log(`listening on ${port}`);
})