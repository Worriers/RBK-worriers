var projectsModel = require('../db/projects/projectsModel.js');
var galleryModel = require('../db/gallery/galleryModel.js');
var userModel = require('../db/user/userModel.js');

function insertUser(user, callback) {
  userModel.create(user, callback);
}

function insertGallery(gallery, callback) {
  galleryModel.create(gallery, callback);
}

function insertProjects(projects, callback) {
  projectsModel.create(projects, callback);
}

module.exports.insertUser = insertUser;
module.exports.insertGallery = insertGallery;
module.exports.insertProjects = insertProjects;