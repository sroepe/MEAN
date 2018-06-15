var mongoose = require("mongoose");
var Note = mongoose.model("Note");
var printError = function(error, explicit){
  console.log(`[${explicit ? 'EXPLICIT' : 'INEXPLICIT'}] ${error.name}: ${error.message}`);
}
module.exports = {
  index: function(req, res){
    return res.json("hitting this route");
  },
  create: function(req, res) {
    Note.create(req.params)
      if(error){
        console.log("there was an error");
        return res.json(error);
      }
      else {
        console.log("this created a record in the db");
        return res.json(Note);
      }
      return res.json("hitting this route")
  },
  // retrieve: function(req, res) {
  //   Note.find({Note: note})
  // }
}