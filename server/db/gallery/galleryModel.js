var mongoose = require('mongoose');

var ImagesSchema = new mongoose.Schema({
  path: {
    type: String,
    unique: true,
    required: true
  },
  desc: {
    type: String,
    default: 'RBK-image'
  }
});

module.exports = mongoose.model('gallery', ImagesSchema);

