const express = require("express");
      app = express();
      bp = require("body-parser");
      path = require("path");
      session = require("express-session");
      port = 8205;
app.use(express.static(path.join(__dirname, "client/dist")));
app.use(bp.json());
app.use(session({secret:"nottelling"}));

app.listen(port, function(){
  console.log(`listening on ${port}`);
})