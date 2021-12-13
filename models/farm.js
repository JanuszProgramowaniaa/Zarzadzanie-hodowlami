const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  User: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
