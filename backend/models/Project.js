const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  codeUrl: { type: String },
  viewUrl: { type: String },
  // Add other fields as necessary
});

module.exports = mongoose.model('Project', ProjectSchema);