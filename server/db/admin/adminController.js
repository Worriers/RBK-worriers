var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var Admin = require("./adminModel.js");
var utils = require('../../config/utils.js');
var users = require('../user/userModel.js');
var questions = require('../faq/quastionModel.js');
var projects = require('../projects/projectsModel.js');

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
  },

  getAdminStats: function(req,res){
      var stats = {users: 0, projects : 0, questions : 0};
      users.count({activated: false}, function(err, userCount) {
        if(err) res.send(err);
        else {
          stats.users = userCount;
          projects.count({approved: false}, function(err, projectCount) {
            if(err) res.send(err);
            else {
              stats.projects = projectCount;
              questions.count({approved: false}, function(err, qCount) {
                if(err) res.send(err);
                else {
                  stats.questions = qCount;
                  res.json(stats);
                }
              });
            }
          });
        }
      });
  }
}