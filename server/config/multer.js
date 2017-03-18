var multer  = require('multer');
var path = require('path');

var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, './server/images/gallery');
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
  }
});

var filter = function (req, file, cb) {
  console.log('THIS IS MULTER FILTER');
  var filetypes = /jpeg|jpg|gif|bmp|png/;
  var mimetype = filetypes.test(file.mimetype);
  var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  console.log(mimetype);
  console.log(extname);

  if (mimetype && extname) {
    return cb(null, true);
  }
  return cb("Error: File upload only supports the following filetypes - " + filetypes);
}

var upload = multer({storage : storage, fileFilter: filter});

module.exports.upload = upload;