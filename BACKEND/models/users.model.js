const mongoose = require("mongoose");
const UserScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
 password:{
  type:String
 }
 
});

const UserModel = mongoose.model("User", UserScheme);
module.exports = UserModel;
