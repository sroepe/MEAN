var mongoose = require("mongoose");
var NoteSchema = new mongoose.Schema({note: String, noted_on: Date});
mongoose.model("Note", NoteSchema);



