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
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  url: {
    type: String
  },
  nationality: {
    type: String,
    enum: ["United States", "United Kingdom", "France"]
  },
  books: [bookSchema]
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
