const mongoose = require("mongoose");

const KeySchema = new mongoose.Schema({
  key: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
}, {collection : 'keys'});

const Key = mongoose.model("Key", KeySchema);

module.exports = Key;