const mongoose = require("mongoose");
const UserScheme = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("User", UserScheme);
module.exports = UserModel;
