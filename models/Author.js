const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    enum: ["Fiction", "Non-fiction"]
  }
});

const authorSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  nationality: {
    type: String,
    enum: ["United States", "United Kingdom", "France"]
  },
  birthYear: {
    type: Number
  },
  books: [bookSchema]
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
