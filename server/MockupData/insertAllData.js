var db = require('../db/config.js');
var fs = require('fs');
var path = require('path');
var dataController = require('./dataController.js');

var projectPath = './JSONS/projects.json';
var usersPath = './JSONS/users.json';
var galleryPath = './JSONS/gallery.json';

var insertAllData = function(dir, cb) {
  fs.readFile(path.join(__dirname, dir), 'utf8', function (err, data) {
    if (err) {
      throw err;
    } else {
      var data = JSON.parse(data);
      for (var i = 0; i < data.length; i++) {
        cb(data[i], function(err, data) {
          if (err) { throw err; }
          console.log('data created!');
        });
      }
    }
  });

};

// Please uncomment these invocations before fire the server at the first time;
//insertAllData(usersPath,dataController.insertUser);
// insertAllData(galleryPath,dataController.insertGallery);
// insertAllData(projectPath,dataController.insertProjects);
