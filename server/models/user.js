const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    default: "",
  },
  languages: {
    type: String,
    required: true,
    default: "English",
  },
  reviews: {
    type: String,
    default: "",
  },
  contact: {
    type: Number,
    maxLength: 10,
  },
  profilePhoto: {
    type: Image,
    default: "",
  },
  ageOver18: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", userSchema);
