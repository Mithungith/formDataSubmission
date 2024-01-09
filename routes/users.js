const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/formDataSave");

const userSchema = mongoose.Schema({
  username:String,
  email:String,
  password:Number
});

module.exports = mongoose.model("userData",userSchema);