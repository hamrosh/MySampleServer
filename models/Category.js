const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//dfd
// Create our Schema
const CategorySchema = new Schema({
  CategoryName: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  user: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  }
});

mongoose.model('categories', CategorySchema);
