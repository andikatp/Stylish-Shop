const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads"); // Simpan file di folder 'uploads/'
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname+ Date.now() + '-' + file.originalname); 
    }
});

const upload = multer({ storage: storage });

module.exports = upload;