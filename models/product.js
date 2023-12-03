const mongoose = require("mongoose");

const product = new mongoose.Schema({
  name: String,
  price: Number,
  rating: Number,
});

const Product = mongoose.model("Product", product);

module.exports = Product;
