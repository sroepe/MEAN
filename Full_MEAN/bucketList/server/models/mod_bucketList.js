var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: String,
  // list_items: [],
})

mongoose.model('User', UserSchema);