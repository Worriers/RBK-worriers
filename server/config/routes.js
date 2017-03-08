var passport = require('passport');
var session = require('express-session');
var userController = require('../db/user/userController.js');
var achievmentsController = require('../db/achievments/achievmentsController.js');
var commentController = require('../db/comment/commentController.js');
var quastionController = require('../db/faq/quastionController.js');
var projectsController = require('../db/projects/projectsController.js');
var galleryController = require('../db/gallery/galleryController.js');

var utils = require('./utils.js');

module.exports = function (app, express) {

app.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }));
app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/api/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.get('/api/gallery', utils.ensureAuthenticated, function(req,res){
  console.log("IM IN GALLERY");
});
// app.post('/api/gallery',handlers.handlePhoto.addphoto);

// app.get('/api/grads', handlers.handleGrads.showgrads);

// app.get('/api/qa',handlers.handlePost.showpost);
// app.post('/api/qa',handlers.handlePost.addpost);

// app.get('/api/project',handlers.handleProject.showproject);
// app.post('/api/project',handlers.handleProject.addproject);

// app.post('/api/users/signup', handlers.handleUsers.signup);
// app.post('/api/users/signin', handlers.handleUsers.signin);

// app.get('/api/users', handlers.handleUsers.getUsers);


app.use(utils.errorLogger);
app.use(utils.errorHandler);
};

