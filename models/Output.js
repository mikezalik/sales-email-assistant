const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OutputSchema = new Schema({
  output: {
    type: String,
    required: true,
  },
  test: {
    type: String,
    required: true,
  },
});

module.exports = output = mongoose.model("output", OutputSchema);
