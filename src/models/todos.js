'use strict';

var mongoose = require('mongoose');

// todo.name per template file
// todo.completed in templates folder as way to mark complete/not completed

var todoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

var model = mongoose.model('Todo', todoSchema);

module.exports = model;
