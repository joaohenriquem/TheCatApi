const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const Cats = mongoose.model("CatsImage", {
    catImage :{
        breed: String,
        categories : String,
        id: String,
        url: String,
        width: String,
        height: String,
    }
  });
  
  module.exports = Cats;