import React, { Component } from "react";
import "./Search.css";
import Results from "../Results";
import API from "../utils/API";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


class Search extends Component {
  state = {
    search: "",
    startYear: "",
    endYear: "",
    results: []
  };

  formatStartDate = value => {
    let formattedDate = value.getFullYear().toString();
    if((value.getMonth()+1) < 10) {
      formattedDate += "0" + (value.getMonth()+1).toString()
    } else {
      formattedDate += (value.getMonth()+1).toString()
    }
    if(value.getDate() < 10) {
      formattedDate += "0" + value.getDate().toString()
    } else {
      formattedDate += value.getDate().toString()
    }
    this.setState({ startYear: formattedDate })
    return formattedDate;
  };

  formatEndDate = value => {
    let formattedDate = value.getFullYear().toString();
    if((value.getMonth()+1) < 10) {
      formattedDate += "0" + (value.getMonth()+1).toString()
    } else {
      formattedDate += (value.getMonth()+1).toString()
    }
    if(value.getDate() < 10) {
      formattedDate += "0" + value.getDate().toString()
    } else {
      formattedDate += value.getDate().toString()
    }
    this.setState({ endYear: formattedDate })
    return formattedDate;
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.startYear && this.state.endYear) {
      API.search("&q=" + this.state.search + "&begin_date=" + this.state.startYear + "&end_date=" + this.state.endYear)
        .then(res => {
          this.setState({ results: res.data })
          this.handleResetButton();
        })
    } else {
      API.search("&q=" + this.state.search)
      .then(res => {
        this.setState({ results: res.data })
        this.handleResetButton();
      });
    }
  };

  handleResetButton = () => {
    this.setState({ search: "", startYear: "", endYear: "" })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [ name ]: value });
  };

  handleArticleSave = index => {
    const newArticle = {
      title: 
        (this.state.results[index].headline.print_headline) ?
          this.state.results[index].headline.print_headline
          :
          this.state.results[index].headline.main,
      date: 
        (this.state.results[index].pub_date) ?
          this.state.results[index].pub_date
          :
          undefined,
      url: this.state.results[index].web_url
    }
    API.saveArticles(newArticle)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="row">
        <div className="col-sm-12">
        <br />

          <div className="card">
            {/* Card Header */}
            <div className="card-header">
              <strong>
                <i className="fa fa-list-alt"></i> Search
              </strong>
            </div>

            <div className="card-body">
              <form>

                {/* Search Box */}
                <div className="form-group">
                  <label htmlFor="search">Search Term:</label>
                  <input onChange={this.handleInputChange} value={this.state.search} type="text" className="form-control" name="search"></input>
                </div>
                {/* Start Year  */}
                <div className="form-group">
                  <label htmlFor="start-year">Start Year:</label>
                  <DayPickerInput onDayChange={day => this.formatStartDate(day)} />      
                </div>
                {/* End Year */}
                <div className="form-group">
                  <label htmlFor="end-year">End Year: </label>
                  <DayPickerInput onDayChange={day => this.formatEndDate(day)} />      
                </div>
                {/* Submit & Clear Buttons */}
                <button type="submit" onClick={this.handleFormSubmit} className="btn btn-default" id="run-search">
                  <i className="fa fa-search"></i> Search
                </button>
                <button type="reset" onClick={this.handleResetButton} className="btn btn-default" id="clear-all">
                  <i className="fa fa-trash"></i> Clear Results
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>
      <Results 
        result={ this.state.results }
        saveButton={ this.handleArticleSave } 
      />
      </div>
    );
  };
};

export default Search;