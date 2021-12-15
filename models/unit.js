const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Unitchema = new Schema({
  Matka: {
    type: String,
    required: true,
  },
  Ojciec: {
    type: String,
    required: true,
  },
  Wiek: {
    type: String,
    required: true,
  },
  Data_Urodzenia: {
    type: String,
    required: true,
  },
  FarmId: {
    type: String,
    required: true,
  },
});

module.exports = Farm = mongoose.model("unit", Unitchema);
