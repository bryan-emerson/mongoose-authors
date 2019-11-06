const Author = require("../models/Author");
const data = require("./authors.json");

Author.deleteMany({}).then(() => {
  Author.create(data).then(authors => {
    console.log(authors);
    process.exit();
  });
});
