const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide Product Name"],
    trim: true,
    max: [30, "Product can have maximum 30 characters"],
    min: [3, "Product must have minimum 3 characters"],
  },

  price: {
    type: Number,
    required: [true, "Please provide Product Price"],
    min: [0, "Price should be a non negative Number"],
  },

  description: {
    type: String,
    trim: true,
    required: [true, "Please provide product description"],
    max: [60, "Description can't be more than 60 character"],
  },

  createdAt: {
    type: String,
  },

  image: {
    type: String,
    unique: false,
    required: true,
  },
});

productSchema.pre("save", function (next) {
  if (!this.createdAt) {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    this.createdAt = formattedDate;
  }
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
