const mongoose = require('mongoose');
const { MONGO_URL } = require('./keys');

mongoose.connect(MONGO_URL, error => {
  if (error) {
    console.error(error)
  }
});

module.exports = mongoose;
