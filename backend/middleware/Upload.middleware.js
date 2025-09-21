const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

function fileFilter(req, file, cb) {
  const filetypes = /csv|xlsx|xls/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  if (extname) {
    cb(null, true);
  }else{
    cb(new Error("Only CSV, XLSX, and XLS files are allowed"))
  }
}

const upload = multer({storage, fileFilter})
module.exports = upload