var mongoose = require('mongoose');
var db = require('../config.js')
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

AdminSchema.plugin(db.autoIncrement.plugin, 'admins');
  
AdminSchema.pre('save', function (next) {    
  var user = this;
   // only hash the password if it has been modified (or is new)   
   if (!user.isModified('password')) {    
     return next();   
   }
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

module.exports = mongoose.model('admins', AdminSchema);
