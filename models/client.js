const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("client", clientSchema);
