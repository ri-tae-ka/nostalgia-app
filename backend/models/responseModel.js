const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  answer1: {
    type: String,
    required: [true, "Please enter your response."],
  },

  answer2: {
    type: String,
    required: [true, "Please enter your response."],
  },

  answer3: {
    type: String,
    required: [true, "Please enter your response."],
  },
});

module.exports = mongoose.model("Responses", responseSchema);
