var userController = require('../db/user/userController.js');
var achievmentsController = require('../db/achievments/achievmentsController.js');
var commentController = require('../db/comment/commentController.js');
var quastionController = require('../db/faq/quastionController.js');
var projectsController = require('../db/projects/projectsController.js');
var galleryController = require('../db/gallery/galleryController.js');

var utils = require('./utils.js');

module.exports = function (app, express) {

// app.get('/api/gallery', handlers.handlePhoto.showphoto);
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

