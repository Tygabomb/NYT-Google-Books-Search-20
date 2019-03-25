const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Article schema for NYT Articles
const articleSchema = new Schema({
  // Title of the stored article from nytimes.com
  title: String,
  // publish date and time of the article
  date: { type: Date, default: Date.now },
  // URL of the article on nytimes.com
  url: String,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
