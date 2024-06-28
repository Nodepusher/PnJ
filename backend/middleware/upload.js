const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "thumbnail") {
      cb(null, "uploads/thumbnail/");
    } else if (file.fieldname === "files") {
      cb(null, "uploads/file/");
    }
  },
  filename: function (req, file, cb) {
    if (file.fieldname === "thumbnail") {
      cb(null, file.originalname);
    } else if (file.fieldname === "files") {
      let uniqueName = uuidv4() + path.extname(file.originalname);
      cb(null, uniqueName);
    }
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
