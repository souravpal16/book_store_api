const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publication: {
        type: String,
        required: false,
        default: "Not found"
    },
    price:{
        type: Number,
        required: false,
        default: 0
    }
})

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;