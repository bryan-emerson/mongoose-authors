const Author = require("./models/Author");

function printAndExit(doc) {
  console.log(doc);
  process.exit();
}

/*
 * Create
 */
// Author.create({
//   firstName: "F. Scott",
//   lastName: "Fitzgerald",
//   nationality: "United States",
//   birthYear: 1896,
//   books: [
//     {
//       title: "The Great Gatsby",
//       type: "Fiction",
//     },
//   ],
// }).then(author => {
//   console.log(author);
// });

/*
 * Read
 */
// Luke Skywalker:
// swapi.com/v2/api/character/1
// /character/:id
// /author/:id
// /author/5ecec23d9797bfac5880e21b
let id = "5ecec23d9797bfac5880e21b";

// Model.findById():
// Author.findById(id).then(author => {
//   console.log(author);
//   process.exit();
// });

// Model.findOne():
// Author.findOne({ nationality: "United States" }).then(printAndExit);

// Model.find():
// /author
// Author.find().then(authors => {
//   response.json(authors)
// })
// Author.find({ birthYear: { $lte: 1900 } }).then(printAndExit);
// /author?nationality=United States&birthYear=1896
// Author.find(
//   // filter:
//   { nationality: "United States" },
//   // projection:
//   "firstName lastName nationality birthYear",
//   // options
//   { limit: 10, sort: "-birthYear" },
// ).then(printAndExit);

/*
 * Update
 */

// Model.findByIdAndUpdate():
// Have to include { new: true } in order to get the updated doc
// Author.findByIdAndUpdate(id, { $set: { birthYear: 1890 } }, { new: true }).then(
//   printAndExit,
// );

// Model.updateMany():
// Author.updateMany(
//   { nationality: "United States" },
//   { nationality: "America" },
//   { new: true },
// ).then(printAndExit);

/*
 * Delete
 */
// Model.findByIdAndRemove():
// Author.findByIdAndRemove(id).then(printAndExit);

// Model.deleteMany():
// Author.deleteMany({ nationality: "France" }).then(printAndExit);
