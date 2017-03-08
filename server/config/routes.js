var userController = require('../db/user/userController.js');
var achievmentsController = require('../db/achievments/achievmentsController.js');
var commentController = require('../db/comment/commentController.js');
var quastionController = require('../db/faq/quastionController.js');
var projectsController = require('../db/projects/projectsController.js');
var galleryController = require('../db/gallery/galleryController.js');

var utils = require('./utils.js');

module.exports = function (app, express) {
//insert and get all the images from the gellary 
app.get('/api/gallery', galleryController.getAllImages );
app.post('/api/gallery', galleryController.insertImage);

// getting all quastions , and adding new quastions 
app.get('/api/faq',quastionController.getAllQuastions);
app.get('/api/faq/:id',quastionController.getOne);
app.post('/api/faq',quastionController.insertQuastion);

// getting all the projects and insert new ones
app.get('/api/projects',projectsController.getAllProjects);
app.post('/api/projects',projectsController.insertProject);



// app.post('/api/users/signup', handlers.handleUsers.signup);
// app.post('/api/users/signin', handlers.handleUsers.signin);

// app.get('/api/users', handlers.handleUsers.getUsers);


app.use(utils.errorLogger);
app.use(utils.errorHandler);
};

