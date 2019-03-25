const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/nytreact" );

const articleSeed = [
  {
    title: "Obama Gives Commencement",
    date: new Date(Date.now()),
    url: "www.google.com"
  },
  {
    title: "Aliens Invande Paris",
    date: new Date(Date.now()),
    url: "www.google.com"
  },
  {
    title: "Trump Steals Nuclear Codes",
    date: new Date(Date.now()),
    url: "www.google.com"
  },
  {
    title: "Knicks Win Championship",
    date: new Date(Date.now()),
    url: "www.google.com"
  },
  {
    title: "AIDS Cured",
    date: new Date(Date.now()),
    url: "www.google.com"
  },
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });