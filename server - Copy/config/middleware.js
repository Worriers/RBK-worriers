var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
var morgan = require('morgan');
var session = require('express-session');
var passport = require('passport');
var User = require('../db/user/userModel.js');

module.exports = function (app, express) {

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.

passport.serializeUser(function(user, done) {
  // console.log(user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // console.log(id)
  User.findById(id,function(err,user){
  done(err, user);
  })
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
  secret: 'RBK-warriors',
  saveUninitialized: true,
  resave: true,
}));
// Init passport authentication 
app.use(passport.initialize());
// persistent login sessions 
app.use(passport.session());
app.use(express.static(__dirname + '/../../dist'));
};