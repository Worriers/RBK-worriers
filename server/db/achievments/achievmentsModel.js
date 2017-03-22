var mongoose = require('mongoose');

var AchievmentsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true 
  },
  desc: {
    type: String,
    required: true 
  },
  url: {
    type: String
  },
  date: {
    type: String, 
    required: true 
  }
});

module.exports = mongoose.model('achievments', AchievmentsSchema);

