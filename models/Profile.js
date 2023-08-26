const mongoose = require("mongoose");
const profileschema = new mongoose.Schema({
  gender: {
    type: String,
  },

  dateOfBirth: {
    type: String,
  },

  about: {
    type: String,
  },

 

  contactNumber: {
    type: Number,
    trim: true,
  },
});

module.exports = mongoose.model("Profile", profileschema);
