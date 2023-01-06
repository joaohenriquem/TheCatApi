const mongoose = require("mongoose");

const CatsCategories = mongoose.model("CatsCategories", {
    categories : {
        id: String,
        name: String
    }
  });
  
  module.exports = CatsCategories;