const express = require("express");
const app = express();
const bp = require("body-parser");
const path = require("path");
const session = require("express-session");
const port = 8001;
app.use(express.static(path.join( __dirname, "/client")));
app.use(bp.urlencoded());
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(session({secret:"nottelling"}));

//start routing
app.get("/", function(req, res){
  res.render("count", { counter: addOnetoCounter(req)})
})

app.post("/count", function(req, res){
  var counter = 0;
  counter += 1;
  req.session.counter = req.body.counter;
  console.log(req.session.counter);

  res.redirect("/");
})

app.post("/plustwo", function(req, res){
  addOnetoCounter(req);
  res.redirect("/");
})

app.post("/reset", function(req, res){
  req.session.destroy();
  res.redirect("/");
})

function addOnetoCounter(req){
  return req.session.counter = req.session.counter ?
                                          req.session.counter +1 : 1;
}

//end routing

app.listen(port, function(){
  console.log(`listening on ${port}`)
})