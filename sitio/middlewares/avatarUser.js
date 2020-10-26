const path = require('path'); 
const multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images/users')
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        req.fileValidationError = "Only Images";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const upload =  multer({
    storage: storage,
    fileFilter:fileFilter
})



module.exports = upload
