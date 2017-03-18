var passport = require('passport');
var session = require('express-session');
var path = require('path');
var multer = require('./multer.js');
var userController = require('../db/user/userController.js');
var adminController = require('../db/admin/adminController.js');
var achievmentsController = require('../db/achievments/achievmentsController.js');
var commentController = require('../db/comment/commentController.js');
var quastionController = require('../db/faq/quastionController.js');
var projectsController = require('../db/projects/projectsController.js');
var galleryController = require('../db/gallery/galleryController.js');

var utils = require('./utils.js');

module.exports = function (app, express) {


app.get('/api/validate', userController.validateAccount);

app.get('/auth/github',
passport.authenticate('github', { scope: [ 'user:email', 'public_repo' ] }));

app.get('/auth/github/callback', passport.authenticate ('github', {
     successRedirect: '/signup',
     failureRedirect: '/'
   }));

app.post('/api/register', passport.authenticate('local-signup', {failureRedirect : '/login'}),function(req,res){
  res.status(201).send(req.user);
});

app.post('/api/login', passport.authenticate('local-login',{failureRedirect : '/loginFail'}),adminController.authorizeAdmin);
app.get('/loginFail',function(req,res){
  res.send({status:'username or password is not correct!'})
})

app.get('/api/logout', function(req, res){
  req.logout();
  res.status(200).send();
});

app.get('/api/validate',userController.validateAccount);
app.get('/api/isLogged',utils.isLogged);

//getting all profiles and editing profiles 
app.get('/api/profile' , userController.getAllUsers);
app.get('/api/profile/:username',userController.getOneUser);
app.post('/api/profile', userController.updateAccount);
app.delete('/api/profile', userController.deleteUser);

// getting and adding achievments 
app.get('/api/achievments',achievmentsController.getAllAchievments);
app.post('/api/achievments',utils.ensureAuthenticated,achievmentsController.insertAchievment);
app.delete('/api/achievments',utils.ensureAuthenticated,achievmentsController.deleteA);

//insert and get all the images from the gellary 
app.get('/api/gallery', galleryController.getAllImages);
app.post('/api/gallery', multer.upload.single('file'), galleryController.insertImage);
app.delete('/api/gallery', galleryController.deleteImg);

// getting all quastions , and adding new quastions 
app.get('/api/faq',quastionController.getAllQuastions);
app.get('/api/faq/:id',quastionController.getOne);
app.post('/api/faq',quastionController.insertQuastion);
app.delete('/api/faq', quastionController.deleteQ);

//getting all comments on a specific question ;
app.get('/api/comment',commentController.getAllComments);
app.post('/api/comment',commentController.insertComment);
app.delete('/api/comment',commentController.deleteComment);


// getting all the projects and insert new ones
app.get('/api/projects',projectsController.getAllProjects);
app.post('/api/projects',projectsController.insertProject);
app.delete('/api/projects', projectsController.deleteProject);

app.get('/images/projects', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

app.all('*', (req, res) => {
  console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
  res.status(200).sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

app.use(utils.errorLogger);
app.use(utils.errorHandler);
};