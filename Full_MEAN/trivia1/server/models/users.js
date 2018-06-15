var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {type: String, required: true, trim: true, minlength: 3},
  scores: Array,
  percents: Array,
})

mongoose.model('User', UserSchema)