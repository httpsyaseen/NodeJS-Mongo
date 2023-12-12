const Product = require("../models/product");
const catchAsync = require("../utils/catchAsync");
const fs = require("fs").promises;
const path = require("path");
const fileChecker = require("../utils/fileChecker");

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).render("home", { products });
});

exports.getProductById = catchAsync(async (req, res, next) => {
  const products = await Product.findById(req.params.id);
  res.status(200).json({
    status: "success",
    results: products.length,
    data: products,
  });
});

exports.updateProductById = catchAsync(async (req, res, next) => {
  const copyProduct = { ...req.body };
  if (req.file) {
    const name = req.file.originalname.split(".")[0];
    const ext = req.file.mimetype.split("/")[1];
    copyProduct.image = `${name}` + `.${ext}`;

    const productId = req.params.id;
    const imageObj = await Product.findById(productId);

    const imagePath = path.join(
      __dirname,
      "..",
      "public",
      "images",
      imageObj.image
    );

    fileChecker.deleteFile(imagePath);
  }
  const products = await Product.findByIdAndUpdate(req.params.id, copyProduct, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: "success",
    data: products,
  });
});

exports.deleteProductById = catchAsync(async (req, res, next) => {
  const productId = req.params.id;
  const imageObj = await Product.findById(productId);

  const imagePath = path.join(
    __dirname,
    "..",
    "public",
    "images",
    imageObj.image
  );

  fileChecker.deleteFile(imagePath);

  const products = await Product.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: products,
  });
});

exports.postProduct = catchAsync(async (req, res, next) => {
  const copyProduct = { ...req.body };
  const name = req.file.originalname.split(".")[0];
  const ext = req.file.mimetype.split("/")[1];
  copyProduct.image = `${name}` + `.${ext}`;
  const products = await Product.create(copyProduct);
  res.status(201).redirect("/products");
});

exports.addProductViewer = catchAsync(async (req, res, next) => {
  res.status(200).render("upload");
});

exports.updateProductViewer = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).render("update", { products });
});

exports.deleteProductViewer = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).render("delete", { products });
});
