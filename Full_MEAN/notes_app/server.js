var express = require("express");
      path = require("path");
      bp = require("body-parser");
      session = require("express-session");
      app = express();
const port = 8010;
app.use(express.static(path.join(__dirname, "client/dist")));
app.use(session({secret:"nottelling"}));
app.use(bp.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

//express routing --> moved to server/config/routes


app.listen(port, function(){
  console.log(`listening on ${port}`);
})