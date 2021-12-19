const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "public/uploads/");
  },
  filename: function (req, file, callback) {
    const name = Date.now() + ".jpg";

    callback(null, name);
  },
});

const upload = multer({ storage });

module.exports = upload;
