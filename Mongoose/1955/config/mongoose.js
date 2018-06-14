const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const mp = path.join(__dirname, "./../models");  //in solution path.resolve("server", "models")
mongoose.connect("./mongodb://localhost/people");
fs.readdirSync(mp).forEach(function(file){
  if(file.indexOf(".js") > 0){
    require( mp +"/"+ file);
  }
})
mongoose.Promise  = global.Promise;