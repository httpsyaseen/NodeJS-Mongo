const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const cors = require("cors");
const errorMiddleware = require("./utils/error");
const app = express();

const productRoutes = require("./routes/productsRouter");

dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));
app.use(
  "/products/images",
  express.static(path.join(__dirname, "public", "images"))
);
app.use("/products/css", express.static(path.join(__dirname, "public", "css")));

app.set("view engine", "ejs");
app.set("views", path.join("./views"));
app.set("partials", path.join("./views/partials"));

app.get("/login", (req, res) => {
  res.render("login");
});

app.use("/products", productRoutes);

app.use(errorMiddleware);

mongoose.connect(process.env.DBLOCAL).then(() => {
  console.log("connected to Database");
});

app.listen(80, () => {
  console.log("Server is running on port 80");
});
