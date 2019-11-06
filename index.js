const Author = require("./models/Author");

/*
 * Create
 */

// Add your favorite author to the database with one of their books
// Author.create({
//   firstName: "F. Scott",
//   lastName: "Fitzgerald",
//   nationality: "United States",
//   birthYear: 1896,
//   books: [
//     {
//       title: "The Great Gatsby",
//       type: "Fiction"
//     }
//   ]
// }).then(author => {
//   console.log(author);
// });

/*
 * Read
 */

// Find one author with the first name 'Ernest' using Object syntax
// Author.findOne({ firstName: "Ernest" }).then(author => {
//   console.log(author);
// });
// Find all authors with 'United States' as their nationality
// Author.find({ nationality: "United States" }).then(authors => {
//   console.log(authors);
// });
// Find all authors born after 1950
// Author.find({ birthYear: { $gt: 1950 } }).then(authors => {
//   console.log(authors);
// });
// Find all authors born between 1900 and 1950
// Author.find({ birthYear: { $gt: 1900, $lt: 1950 } }).then(authors => {
//   console.log(authors);
// });
// Find all authors born before 1900
// Author.find({ birthYear: { $lt: 1900 } }).then(authors => {
//   console.log(authors);
// });

/*
 * Update
 */

// Set Ernest Hemingway's birth year to 1900
// Author.findOneAndUpdate(
//   { firstName: "Ernest" },
//   { $set: { birthYear: 1900 } },
//   { new: true }
// ).then(authors => {
//   console.log(authors);
// });
// Set everyone with a nationality of 'United States' to a birth year of 1965
// Author.updateMany(
//   { nationality: "United States" },
//   { birthYear: 1965 },
//   { new: true }
// ).then(authors => {
//   console.log(authors);
// });
// Add another book to Ernest Hemingway
// Author.findOneAndUpdate(
//   { firstName: "Ernest" },
//   { $push: { books: { title: "Men Without Women", type: "Fiction" } } },
//   { new: true }
// ).then(authors => {
//   console.log(authors);
// });
// Set the url property of Toni Morrison to the url for her wikipedia page
// Author.findOneAndUpdate(
//   { lastName: "Morrison" },
//   { $set: { url: "https://en.wikipedia.org/wiki/Toni_Morrison" } },
//   { new: true }
// ).then(authors => {
//   console.log(authors);
// });

/*
 * Delete
 */

// Delete Milan Kundera
// Author.findOneAndRemove({ lastName: "Kundera" }).then(authors => {
//   console.log(authors);
// });
