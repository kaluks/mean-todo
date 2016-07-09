'use strict';

var express = require('express');

var Todo = require('../models/todos.js');
// var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function(req, res){
  Todo.find({}, function(err, todos){
    if(err){
      //will return 500 internal server err
      return res.status(500).json({message:err.message});
    }
    res.json({todos:todos});
  });
});

// POST route to create new entries
router.post('./todos', function(req, res){
  var todo=req.body;
  Todo.create(todo, function(err,todo){
    if(err){
      return res.status(500).json({err:err.message});
    }
    res.json({'todo':todo, message: "Todo created"});
  })
});

// PUT route to update existing entries
router.put('./todos/:id', function(req, res){
  var id = req.params.id;
  var todo=req.body;
  if(todo && todo._id !== id){
    return res.status(500).json({err:"ids don't match!"});
  }

  Todo.findByIdAndUpdate(id, todo, {new:true},function(err,todo){
    if(err){
      return res.status(500).json({err:err.message});
    }
    res.json({'todo':todo, message: "Todo updated"});
  })
});

// need to add delete route to delete entries

module.exports = router;
