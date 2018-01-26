const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  CategoryID: {
    type: String
  },

  SubCategoryID: {
    type: String
  },

  Question: {
    type: String,
    required: true
  },
  Option1: {
    type: String
  },

  Option2: {
    type: String
  },

  Option3: {
    type: String
  },

  Option4: {
    type: String
  },

  RightOption: {
    type: String
  },

  CreatedBy: {
    type: String
  },

  CreatedDate: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('QuestionMaster', QuestionSchema);
