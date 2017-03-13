var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var Admin = require("./adminModel.js");

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

// passport.use('local-login', new LocalStrategy({

// },
// ))



// module.exports = {
//   registerAdmin: function(req, res){
//     Admin.findOne({
//       username: req.body.username
//     }, function(err, user) {
//       if (user) {
//         res.status(200).send('admin already existed!');
//       } else {
//         var newUser = new db.User();
//         newUser.username = req.body.username.toLowerCase();
//         newUser.password = newUser.generateHash(req.body.password);
//         newUser.save(function(err, user) {
//           req.login(user, function(err) {
//             if (err) {
//               return next(err);
//             }
//             res.json(user);
//           });
//         });
//       }
//     });
//   }
// }