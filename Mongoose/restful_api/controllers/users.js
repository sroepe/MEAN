var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {
  index: function(req, res){
    return res.json("hitting this route")
  }
}