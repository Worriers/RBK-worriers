var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
var morgan = require('morgan');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');

module.exports = function (app, express) {

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
  secret: 'RBK-warriors',
  saveUninitialized: true,
  resave: true,
  // using store session on MongoDB using express-session + connect
  // store: new MongoStore({
  //   mongooseConnection: mongoose.connection,
  //   collection: 'sessions'
  // })
}));
// Init passport authentication 
app.use(passport.initialize());
// persistent login sessions 
app.use(passport.session());

//app.use(session({ secret: 'RBK-warriors', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.static(__dirname + '/../../dist'));
};
