const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

require('../models/Question');
const Question = mongoose.model('QuestionMaster');

// get all the Categories
router.get('/', (req, res) => {
  Question.find({}, function(err, questions) {
    if (err) {
      return;
    }
    res.json(questions);
  });
});

// Select one Question

router.get('/:id', (req, res) => {
  Question.findOne({ _id: req.params.id }, function(err, question) {
    if (err) {
      res.send('test');
      return;
    }
    res.json(question);
  });
});

// Delete a specific Question
router.delete('/:id', (req, res) => {
  Question.remove({ _id: req.params.id }, function(err) {
    if (err) return handleError(err);
    res.send('Deleted');
  });
});

// Create a New Question
router.post('/', (req, res) => {
  Question.create(req.body, function(err, question) {
    if (err) {
      console.log('Error Occured while adding Question');
      return;
    }
    res.json(question);
    console.log('Question Created');
  });
});

// Update a New Question
router.patch('/:id', (req, res) => {
  var query = { _id: req.params.id };

  Question.update(query, req.body, function(err, question) {
    if (err) {
      console.log('Error Occured while updating Question');
      return;
    }
    res.json(question);
    console.log('Question Updated');
  });
});

module.exports = router;
