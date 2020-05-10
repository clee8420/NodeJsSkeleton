var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ 
  dest: 'public/images' 
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/image_upload', upload.single('file_to_upload'), function(req, res, next){
  res.status(200).json({
    file: req.file,
    message: "You have successfully uploaded a file"
  });
});


module.exports = router;
