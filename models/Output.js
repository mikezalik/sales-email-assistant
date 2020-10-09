const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OutputSchema = new Schema({
  emailOutput: {
    type: String,
    required: true,
  },
});

module.exports = output = mongoose.model("output", OutputSchema);
