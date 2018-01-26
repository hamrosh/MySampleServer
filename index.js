const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const categories = require('./routes/categories');
const questions = require('./routes/questions');

// declare a new express app
const app = express();

// set the app parameters for handling DATA from form

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// declare a new mongoose object for mongodb connection

mongoose.connect('mongodb://sa:pass@ds259245.mlab.com:59245/vidjot-prod');
mongoose.Promise = global.Promise;

// load routes

app.use('/api/categories', categories);
app.use('/api/questions', questions);

// assign a port to the express app
const PORT = process.env.PORT || 5000;

// set a default route /
app.use('/', (req, res) => {
  res.send('<h1>ITI GURUS Home</h1>');
  console.log('server started');
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// set the new app to listen on specfic Port

app.listen(PORT);
