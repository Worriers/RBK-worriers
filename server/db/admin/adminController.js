var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Admin = require('./adminModel.js');
var utils = require('../../config/utils.js');
var users = require('../user/userModel.js');
var questions = require('../faq/quastionModel.js');
var projects = require('../projects/projectsModel.js');
var comments = require('../comment/commentModel.js');

passport.use('local-signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true // allows us to pass back the entire request to the callback
},
function(req, username, password, done) {
  process.nextTick(function () {
    Admin.findOne({'username': username}, function(err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, false, { message: 'Admin is already existed!' });
      } else {
        var newAdmin = new Admin();
        newAdmin.username = username;
        newAdmin.password = password;
        newAdmin.displayName = req.body.displayName;
        newAdmin.save(function(err) {
          if (err) {
            throw err;
          }
          return done(null, newAdmin);
        });
      }
    });
  });
}
));

passport.use('local-login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
function(req, username, password, done) {
  Admin.findOne({'username': username}, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }
    utils.comparePass(password, user.password, function(err, match) {
      if (!match) {
        return done(null, false);
      } else {
        return done(null, user, {status: 'valid'});
      }
    });
  });
}
));

module.exports = {
  authorizeAdmin: function(req, res) {
    res.send({status: req.authInfo.status, data: req.user});
  },

  getAdminStats: function(req, res) {
    var stats = {users: 0, projects: 0, questions: 0};
    users.count({activated: false}, function(err, userCount) {
      if (err) { res.send(err); } else {
        stats.users = userCount;
        projects.count({approved: false}, function(err, projectCount) {
          if (err) { res.send(err); } else {
            stats.projects = projectCount;
            questions.count({approved: false}, function(err, qCount) {
              if (err) { res.send(err); } else {
                stats.questions = qCount;
                res.json(stats);
              }
            });
          }
        });
      }
    });
  },


  getNotActivatedUsers: function(req, res) {
    users.find({activated: false}).exec(function (err, alluser) {
      if (err) {
        res.json({error: err});
      } else {
        res.json(alluser);
      }
    });
  },

  approveUser: function(req, res) {
    users.findById(req.body.id).exec(function (err, user) {
      if (err) {
        res.json({error: err});
      } else {
        if (user) {
          user.activated = true;
          user.save((err, user) => {
            if (err) {
              res.json({error: err});
            } else {
              res.json({ok: 1});
            }
          });
        } else {
          res.json({error: {message: 'user not found'}});
        }
      }
    });
  },

  deleteUser: function(req, res) {
    var id = req.body.id; 
    users.remove({_id: id}, function (err, p) {
      if (err) {
        res.json({error: err});
      } else {
        res.json({ok: 1});
      }
    });
  },

  getNotApprovedProjects: function(req, res) {
    projects.find({approved: false}).populate('teamMembers', '_id displayName username').exec(function (err, projects) {
      if (err) {
        res.json({error: err});
      } else {
        res.json(projects);
      }
    });
  },

  approveProject: function(req, res) {
    projects.findById(req.body.id).exec(function (err, project) {
      if (err) {
        res.json({error: err});
      } else {
        if (project) {
          project.approved = true;
          project.save((err, project) => {
            if (err) {
              res.json({error: err});
            } else {
              res.json({ok: 1});
            }
          });
        } else {
          res.json({error: {message: 'project not found'}});
        }
      }
    });
  },

  deleteProject: function(req, res) {
    var id = req.body.id; 
    projects.remove({_id: id}, function (err, p) {
      if (err) {
        res.json({error: err});
      } else {
        res.json({ok: 1});
      }
    });
  },

  getNotApprovedQuestions: function(req, res) {
    questions.find({approved: false}).exec(function (err, questions) {
      if (err) {
        res.json({error: err});
      } else {
        '';
        res.json(questions);
      }
    });
  },

  approveQuestion: function(req, res) {
    questions.findById(req.body.id).exec(function (err, question) {
      if (err) {
        res.json({error: err});
      } else {
        if (question) {
          question.approved = true;
          question.save((err, question) => {
            if (err) {
              res.json({error: err});
            } else {
              res.json({ok: 1});
            }
          });
        } else {
          res.json({error: {message: 'question not found'}});
        }
      }
    });
  },

  deleteQuestion: function(req, res) {
    var id = req.body.id; 
    questions.remove({_id: id}, function (err, q) {
      if (err) {
        res.json({error: err});
      } else {
        res.json({ok: 1});
      }
    });
  },

  deleteComment: function(req, res) {
    var id = req.body.id; 
    comments.remove({_id: id}, function (err, p) {
      if (err) {
        res.json({error: err});
      } else {
        res.json({ok: 1});
      }
    });
  }

};