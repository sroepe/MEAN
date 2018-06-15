const express = require("express");
      app = express();
      session = require("express-session");
      bp = require("body-parser");
      path = require("path");
      port = 8050;
app.use(express.static(path.join(__dirname, "client/dist")));
app.use(session({secret:"nottelling"}));
app.use(bp.json());

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, function(){
  console.log(`listening on ${port}`);
})
