var mongoose = require("mongoose");
var Schema = mongoose.Schema; 



var UserSchema = new Schema({
  name: {type: String, required: true, trim: true, minlength: 3},
  items: [{type: Schema.Types.ObjectId, ref: 'List'} ]
})


var ListSchema = new Schema({
  creator: String,
  title: {type: String, required: true, minlength: 5},
  description: {type: String, required: true, minlength: 10 },
  created_on: {type: Date},
  other_users: Array,
  done: Boolean,
  _user: {type: Schema.Types.ObjectId, ref:'User'}
})

mongoose.model('User', UserSchema); 

mongoose.model('List', ListSchema)