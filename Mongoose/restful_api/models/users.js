const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  age: Number,
})

mongoose.model("User", UserSchema)