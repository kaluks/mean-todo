'use strict';

var Todo = require('./models/todos.js');

var todos = [
  'Feed bunnies',
  'Water plants',
  'Trim trees'
];

todos.forEach(function(todo, index){
  Todo.find({'name':todo}, function(err,todos){
    if(!err && !todos.length){
      Todo.create({completed:false, name:todo});
    };
  });
});
