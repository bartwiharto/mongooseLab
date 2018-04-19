var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

// move it from book.js to index.js

//below is assigning "./book.js" to "Book". so that "book.js" can be accessed from another file by using "index.js" file.
//module.exports is expressing "book.js" as a module called "Book" throughout this "index.js" file (scope is only within this "index.js").
//so you can only access "Book" from within "index.js" but would have to use "index.js" if you want to access from another file.
module.exports.Book = require("./book.js");
