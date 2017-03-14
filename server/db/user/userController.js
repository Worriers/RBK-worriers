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
    process.nextTick(function () {
      User.findOneAndUpdate({ _id: profile.id },{$set:{
        displayName: profile.displayName,
        email: profile.emails[0].value,
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
          var newUser = new User();
          newUser._id = profile.id;
          newUser.username = profile.username;
          newUser.displayName = profile.displayName;
          newUser.profileUrl = profile.profileUrl;
          newUser.email = profile.emails[0].value;
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
      res.status(500).send('err');
    }else{
      res.status(200).json(alluser)
    }
  });
 },

 getOneUser : function (req,res) {
   User.findById(req.body.id, function (err, user) {  
    if (err) {
      res.send(err)
    }else{
      res.status(200).json(user)
    } 
  })
 },

 validateAccount: function(req,res){
  if(req.user.completed){
    if(req.user.activated){
      res.status(202).send(req.user);
    }else{
      res.status(203).send('not activated');
    }
  }else{
    res.status(204).send(req.user);
  }
 }, 

 updateAccount : function(req , res) {
  console.log(req.body)
  var id = req.body.id ; 
  var name = req.body.name
  User.findOneAndUpdate({_id: id} , {username : name} , function(err, data){
    if(err){throw err} ; 
    res.status(201).json(data);
  })
 }


}
