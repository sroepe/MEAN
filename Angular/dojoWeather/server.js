const express = require("express");
      app = express();
      bp = require("body-parser");
      path = require("path");
      session = require("express-session");
      port = 8008;
app.use(express.static(path.join(__dirname, "client/dist")));
app.use(session({secret:"nottelling"}));
app.use(bp.json());

app.listen(port, function(){
  console.log(`listening on ${port}`);
})