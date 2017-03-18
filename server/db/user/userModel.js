var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Q = require('q');
// var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique : true,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String
  },
  profileUrl: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  following: {
    type: Number,
    required: true
  },
  followers: {
    type: Number,
    required: true
  },
  publicRepos: {
    type: Number,
    required: true
  },
  img : {
    type: String,
    required: true
  },

  age : {
    type: Number
  },

  mainMajor : {
    type: String
  },

  cohort : {
    type: Number
  },

  currentJob : {
    type: String
  },

  linkedIn : {
    type: String
  },

  gitHub : {
    type: String
  },  
  projects : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'projects'
  }],
  achievments : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'achievments'
  }],
  completed: {
    type: Boolean,
    default: false
  },
  activated: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('users', UserSchema);
