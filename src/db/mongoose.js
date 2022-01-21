const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017/book-store-api';
mongoose.connect(connectionURL);
console.log('connection to database done.');

