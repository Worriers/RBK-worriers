var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Q = require('q');

var AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  displayName: {
    type: String
  }
});

module.exports = mongoose.model('admins', AdminSchema);
