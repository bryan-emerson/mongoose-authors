const Author = require("./models/Author");

Author.create({
  firstName: "Ernest",
  lastName: "Hemingway",
  books: [
    {
      title: "The Sun Also Rises",
      type: "Fiction"
    },
    {
      title: "The Old Man and The Sea",
      type: "Fiction"
    },
    {
      title: "A Farewell to Arms",
      type: "Fiction"
    }
  ]
}).then(author => console.log(author));

Author.create({
  firstName: "J.K.",
  lastName: "Rowling",
  url: "https://www.jkrowling.com/",
  books: [
    {
      title: "Harry Potter and the Philosopher's Stone",
      type: "Non-fiction"
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      type: "Non-fiction"
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      type: "Non-fiction"
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      type: "Non-fiction"
    },
    {
      title: "Harry Potter and the Order of the Phoenix",
      type: "Non-fiction"
    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      type: "Non-fiction"
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      type: "Non-fiction"
    }
  ]
}).then(author => console.log(author));

