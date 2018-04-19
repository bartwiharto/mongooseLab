
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({

    // we define what we're willing to accept in a Contact
    // keys are as usual; values are String, Number, Date,
    // Boolean, ObjectId, Array
    //input schema needs to contain: title, author, image, release date

    title: String,
    author: String,
    image: String,
    releaseDate: String

});

var Book = mongoose.model('books', BookSchema);

module.exports = Book;