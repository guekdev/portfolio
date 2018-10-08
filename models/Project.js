const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  url: {
    type: String
  },
  date: {
    type: Date,
    default: Date
  }
});

module.exports = Projects = mongoose.model('project', ProjectSchema);
