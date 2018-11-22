const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  image: { type: Date, default: Date.now },
  link: {type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
