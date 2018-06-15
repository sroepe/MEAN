//connect to mongoose, connect to db, load models


const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const mp = path.join(__dirname, "./../models");
mongoose.connect("./mongodb://localhost/users");

fs.readdirSync(mp).forEach(function(file){
  if(file.indexOf(".js") > 0 ){
    require( mp +"/"+ file);
  }
})

