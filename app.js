const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const Product = require("./models/product");
const app = express();
dotenv.config({ path: "./config.env" });

app.use(express.json());

app.get("/", async function (req, res) {
  const products = await Product.find();
  res.status(200).json({
    status: "success",
    data: products,
  });
});
app.post("/", async function (req, res) {
  const products = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    data: products,
  });
});

app.patch("/:id", async function (req, res) {
  const products = await Product.findByIdAndUpdate(req.params.id, req.body);

  res.status(201).json({
    status: "success",
    data: products,
  });
});

app.delete("/:id", async function (req, res) {
  const products = await Product.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: products,
  });
});

mongoose.connect(process.env.DB).then(() => {
  console.log("connected to Database");
});

app.listen(80, () => {
  console.log("Server is running on port 80");
});
