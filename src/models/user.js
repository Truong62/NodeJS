const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // _id: uuid,
  name: String,
  email: String,
  city: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
