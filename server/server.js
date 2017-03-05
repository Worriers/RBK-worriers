var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
 var handlers = require('./handlers.js')

var app = express();

// connect to mongo database
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/boardly');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../dist'));

//routes
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

app.listen(process.env.PORT || 5000);

// export our app for testing and flexibility, required by index.js
module.exports = app;
