const express = require("express");
const app = express();
const path = require("path");
const bp = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
// const ejsLint = require("ejs-lint ");

// ejsLint("quotes", debug= Debug("quotes"));
const port = 8007;
app.use(express.static(path.join(__dirname,"static")));
app.use(bp.urlencoded({extended: false}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(session({secret: "nottelling", resave: true, saveUninitialized: true}));

const promise = mongoose.connect('mongodb://localhost/quoting_dojo', {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;
const QuoteSchema = new mongoose.Schema({
  name: {type: String},
  quote: {type: String}
}, {timestamps: true})

// mongoose.model("Quotes", QuoteSchema);
const Quote = mongoose.model("quotes", QuoteSchema);


//start routing
app.get("/", function(req, res){
  res.render("index")
})


app.get("/quotes", function(req, res){
  Quote.find({}, function(err, quotes){
    if (err){
      console.log(err);
    }
  res.render("quotes", {quotes:quotes})
  })
})

app.post("/quotes", function (req, res){
  const addQuote = new Quote();
  addQuote.name = req.body.name;
  addQuote.quote = req.body.quote;
  addQuote.save(req.body, function(err){
    if(err) {
      console.log(err, "There is an error.");
    }
    else {
      console.log("The quote was successfully added to the db.");
    }
  })
    res.redirect("/quotes");
})


/////enter other routes


//end routing

app.listen(port, function(){
  console.log(`listening on ${port}`);
})
