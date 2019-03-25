import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import SavedArticles from "./SavedArticles";
import NavBar from "./Navbar";

const NYTSearch = () => (
  <div className="container pb-5">
    <NavBar />
    <Header />
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/saved" component={ SavedArticles } />
      </Switch>
    </div>
    </Router>
  </div>
);

export default NYTSearch;