const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      const ext = file.mimetype.split("/")[1];
      const name = file.originalname.split(".")[0];
      return cb(null, `${name}` + `.${ext}`);
    } else {
      return cb(true, null);
    }
  },
});

const upload = multer({ storage });

module.exports = upload;
