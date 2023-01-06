const mongoose = require("mongoose");

const CatsBreed = mongoose.model("CatsBreed", {
    breed: {
      id: String,
      name: String,
      origin: String,
      temperament: String,
      description: String,
      image: String
    },
  });
  
  module.exports = CatsBreed;