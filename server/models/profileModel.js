var mongoose = require('mongoose');
require('mongoose-type-url');

var ProfilesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age : {
    type: Number,
    required: true
  },
  mainMajor : {
    type: String,
    required: true
  },
  cohort : {
    type: Number,
    required: true
  },
  currentJob : {
    type: String,
    required: true
  },
  linkedIn : {
    type: mongoose.SchemaTypes.Url ,
    required: true
  },
  gitHub : {
    type: mongoose.SchemaTypes.Url ,
    required: true
  },
  img : {
    type: mongoose.SchemaTypes.Url ,
    required: true
  },
  achievments : [{
    type: mongoose.Schema.Types.ObjectId, // check if this is the way to link 2 schemas togetheralso in quastions commentes
    ref: 'achievments'
  }]
});

module.exports = mongoose.model('profiles', ProfilesSchema);
