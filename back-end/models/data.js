const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  temperature: {
    type: Number,
  },
  time: {
    type: Date,
  },
  color: {
    type: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
