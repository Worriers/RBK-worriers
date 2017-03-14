var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var Admin = require("./adminModel.js");
var utils = require('../../config/utils.js');

passport.use('local-signup', new LocalStrategy({
  usernameField : 'username',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
},
function(req, username, password, done){
  process.nextTick(function () {
    Admin.findOne({'username': username}, function(err,user){
      if(err){
        return done(err);
      }
      if(user){
        return done(null, false, { message: 'Admin is already existed!' })
      } else{
        var newAdmin = new Admin();
        newAdmin.username = username;
        newAdmin.password = password;
        newAdmin.displayName = req.body.displayName;
        newAdmin.save(function(err){
          if(err){
            throw err;
          }
          return done(null, newAdmin);
        })
      }
    })
  })
}
));

passport.use('local-login', new LocalStrategy({
  usernameField : 'username',
  passwordField : 'password',
  passReqToCallback : true
},
function(req, username, password, done){
  Admin.findOne({'username': username}, function(err,user){
    if(err){
      return done(err);
    }
    if(!user){
      return done(null,false);
    }
    utils.comparePass(password,user.password,function(err,match){
      if(!match){
        return done(null,false);
      } else{
        return done(null,user,{status:'valid'});
      }
    })
  })
}
))

module.exports = {
  authorizeAdmin: function(req, res){
    res.send({status: req.authInfo.status, data: req.user});
  }
}