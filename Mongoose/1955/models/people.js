const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var personSchema = new Schema({
  name: String,
});

mongoose.model("Person", personSchema);

// module.exports = mongoose.model("Person", personSchema);

