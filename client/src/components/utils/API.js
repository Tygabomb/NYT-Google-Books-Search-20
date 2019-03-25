import axios from "axios";

export default {
  getArticles: function() {
    return axios.get("/api/articles");
  },
  saveArticles: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  getOneArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  deleteArticle: function(id) {
    return axios.delete("api/articles/" + id);
  },
  search: function(query) {
    return axios.post("/nyt/" + query);
  }
};

