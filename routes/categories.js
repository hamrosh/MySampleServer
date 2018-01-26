const express = require('express');
const mongoose = require('mongoose');
// declare a router object from express to handle routes

const router = express.Router();

// Load Category Model
require('../models/Category');
const Category = mongoose.model('categories');

// get all the Categories
router.get('/', (req, res) => {
  Category.find({}, function(err, categories) {
    if (err) {
      return;
    }
    res.json(categories);
  });
});

// Select one Category

router.get('/:id', (req, res) => {
  Category.findOne({ _id: req.params.id }, function(err, category) {
    if (err) {
      return;
    }
    res.json(category);
  });
});

// Delete a specific Category
router.delete('/:id', (req, res) => {
  Category.remove({ _id: req.params.id }, function(err) {
    if (err) return handleError(err);
    res.send('Deleted');
  });
});

// Create a New Category
router.post('/', (req, res) => {
  Category.create(req.body, function(err, category) {
    if (err) {
      console.log('Error Occured while adding Category');
      return;
    }
    res.json(category);
    console.log('Category Created');
  });
});

// Create a New Category
router.patch('/:id', (req, res) => {
  var query = { _id: req.params.id };

  Category.update(query, req.body, function(err, category) {
    if (err) {
      console.log('Error Occured while updating Category');
      return;
    }
    res.json(category);
    console.log('Category Updated');
  });
});

module.exports = router;

// set a default route /
// router.use('/createnew', (req, res) => {
//   var category = new Category({
//     CategoryName: 'Electrical',
//     Description: 'category for electrical',
//     user: 'Hamrosh'
//   });

//   category.save(function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send('<h1>Just Created one Category');
//       console.log('Category Created');
//     }
//   });
// });
