const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FarmSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  UserId: {
    type: String,
    required: true,
  },
});

module.exports = Farm = mongoose.model("farm", FarmSchema);
