const mongoose = require("mongoose")

const lspSchema = new mongoose.Schema( {
    fullName: {
        type: String,
        required: true
     },
     email: {
        type: String,
        required: true,
        unique: true
     },
     password: {
        type: String,
        required: true
     },
     phone: {
      type: String,
      required: true,
      unique: true
     },
     service: {
        type: String,
        default: "",
        required: true
     },
     location: {
        type: String,
        default: "",
        required: true
     },
     practiceAreas: {
        type: String,
        required: true,
        default: ""
     },
     experience: {
        type: Number,
        required: true,
        default: 0
     },
     languages: {
        type: String,
        required: true,
        default: "English"
     },
     bar: {
        type: String,
        default: "",
        required: true
     },
     fees: {
        type: Number
     },
     rating: {
        type: String,
        default: 0
     },
     reviews: {
        type: String,
        default: ""
     },
     website: {
        type: String,
        default: "",
        required: true
     },
     bio: {
      type: String,
      default: ""
     }
    }
);

module.exports = mongoose.model("lsp", lspSchema);