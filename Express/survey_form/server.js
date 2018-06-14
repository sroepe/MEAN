const express = require("express");
const app = express();
const bp = require("body-parser");
const path = require("path");
const session = require("express-session");
const port = 8000;
app.use(express.static(path.join(__dirname,"/client")));
app.use(bp.urlencoded());
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(session({secret:"nottelling"}));

//start routing

app.get("/", function(req, res){
  res.render("index");
})

app.post("/result", function(req, res){
  const surveyData = {
    name: req.body.name,
    city : req.body.city,
    language : req.body.language,
    comment : req.body.comment,
  };
  res.render("result", { postData: surveyData });
})

app.post("/goback", function(req, res){
  res.redirect("/")
})


//end routing

app.listen(port, function(){
  console.log(`listening on ${port}`);
})