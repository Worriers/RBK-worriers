var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Q = require('q');
// var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  age : {
    type: Number,
    required: true
  },

  mainMajor : {
    type: String,
    required: true
  },

  cohort : {
    type: Number,
    required: true
  },

  currentJob : {
    type: String,
    required: true
  },

  linkedIn : {
    type: String, 
    required: true
  },

  gitHub : {
    type: String,
    required: true
  },

  img : {
    type: String,
    required: true
  },

  achievments : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'achievments'
  }]
});

UserSchema.methods.comparePasswords = function (candidatePassword) {
  var savedPassword = this.password;
  return Q.Promise(function (resolve, reject) {
    bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  // if (!user.isModified('password')) {
  //   return next();
  // }

    // hash the password along with our new salt
    bcrypt.hash(user.password, null, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });

module.exports = mongoose.model('users', UserSchema);
