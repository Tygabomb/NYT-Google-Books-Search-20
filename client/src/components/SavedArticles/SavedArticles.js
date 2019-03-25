import React, { Component } from "react";
import API from "../utils/API";
import "./SavedArticles.css";

class SavedArticles extends Component {
  state = {
    saved: []
  };
  
  componentDidMount() {
    this.displayArticles();
  };

  formatDate = value => {
    return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getFullYear();
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.displayArticles())
      .catch(err => console.log(err));
  };
  
  displayArticles = () => {
    API.getArticles()
    .then(res => { 
      this.setState({ saved: res.data }) 
      console.log(res.data)
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <br />

          <div className="card">
            {/* Card Header */}
            <div className="card-header">
              <strong>
                <i className="fa fa-table"></i> Saved Articles
              </strong>
            </div>

            {/* Saved Articles */}
            <div className="card-body" id="saved-section">
              {this.state.saved.map(headlines => 
                <div key={headlines._id} className="saved-articles alert alert-primary" role="alert">
                  <a href={headlines.url} target="_blank">{headlines.title}</a>
                  <span>Article Date: {this.formatDate(new Date(headlines.date))}</span>
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => this.deleteArticle(headlines._id)}
                    >Remove</button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    );
  };
}

export default SavedArticles;