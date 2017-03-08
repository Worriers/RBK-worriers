
var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var user = require("./userModel.js");
var configAuth = require("../../config/auth.js");

// Use the GitHubStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GitHub
//   profile), and invoke a callback with a user object.
passport.use(new GitHubStrategy({
    clientID: configAuth.gitHubAuth.clientID,
    clientSecret: configAuth.gitHubAuth.clientSecret,
    callbackURL: configAuth.gitHubAuth.clientURL
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      console.log('this is profile OBJ in ');
      console.log(profile);
      console.log('this is profile TOKEN in ');
      console.log(accessToken);

      // To keep the example simple, the user's GitHub profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the GitHub account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

module.exports ={
	getAllUsers : function (req, res) {
	  user.find().exec(function (err, alluser) {
	    if(err){
		  res.status(500).send('err');
		}else{
		  res.json(alluser)
		}
		});
	},
	insertUser : function (req, res) {
	  var newUser = new user(req.body);  
      user.save(function (err, newUser) {  
        if (err) {
          res.send(err);
        }
        res.send(newUser);
        });  
	},
	getOneUser : function (req,res) {
	  user.findById(req.params.id, function (err, teacher) {  
        if (err) {
          res.send(err)
        }else{
          res.json(teacher)
        } 
        })
    }
}