const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../utils/uploader");

router
  .route("/")
  .get(productController.getAllProducts)
  .post(upload.single("photo"), productController.postProduct);

router
  .route("/:id")
  .patch(upload.single("photo"), productController.updateProductById)
  .delete(productController.deleteProductById);

router.route("/addproduct").get(productController.addProductViewer);
router.route("/updateproduct").get(productController.updateProductViewer);
router.route("/deleteproduct").get(productController.deleteProductViewer);

module.exports = router;
