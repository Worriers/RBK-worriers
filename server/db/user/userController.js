var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var User = require("./userModel.js");
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
    var check = profile.emails === undefined ? false : true; 
    process.nextTick(function () {
      User.findOneAndUpdate({ _id: profile.id },{$set:{
        displayName: profile.displayName,
        email: check ? profile.emails[0].value : null,
        img: profile._json.avatar_url,
        following: profile._json.following,
        followers: profile._json.followers,
        publicRepos: profile._json.public_repos
      }}, {new: true}, function (err, user) {
        if(err) {
          return done(err)
        }
        if(user) {
          return done(null,user)
        } else {
          var userEmail = check ? profile.emails[0].value : null;
          var newUser = new User();
          newUser._id = profile.id;
          newUser.username = profile.username;
          newUser.displayName = profile.displayName;
          newUser.profileUrl = profile.profileUrl;
          newUser.email = userEmail;
          newUser.img = profile._json.avatar_url;
          newUser.following = profile._json.following;
          newUser.followers = profile._json.followers;
          newUser.publicRepos = profile._json.public_repos;
          newUser.save(function(err){
            if(err){throw err;}
            return done(null,newUser);
          })
        }
      });
    });
  }
  ));




module.exports ={ 
  getAllUsers : function (req, res) {
   User.find({}).populate({
    path: 'achievments'}).exec(function (err, alluser) {
     if(err){
      res.status(500).send(err);
    }else{
      res.json(alluser)

    }
  });
 },

 getOneUser : function (req,res) {
   User.findById(req.params.username, function (err, user) {  
    if (err) {
      res.status(500).send(err);
    }else{
      res.json(user);
    } 
  })
 },

 validateAccount: function(req,res){
  res.json(req.user);
 }, 

 updateAccount : function(req , res) {
  User.findOneAndUpdate({_id: req.user.id} , { $set: {
    age : req.body.age,
    mainMajor : req.body.mainMajor,
    cohort : req.body.cohort,
    currentJob : req.body.currentJob,
    linkedIn: req.body.linkedIn,
    completed: true
    } 
  } 
   , { new: true }, function(err, data){
    if(err){throw err} ; 

    req.user.completed = data.completed;
    res.status(201).send(data);
  })
 },
  deleteUser : function(req,res) {
    var id = req.body._id ; 
    User.remove({_id: id}, function (err, p) {
      if (err){
        throw err
      }
      console.log('question removed');
      res.status(200).send();
    })
  }
}
