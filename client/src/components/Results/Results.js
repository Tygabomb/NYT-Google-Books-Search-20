import React from "react";
import "./Results.css";

const Results = ({ result, saveButton }) => (
  <div className="row">
    <div className="col-sm-12">
      <br />

      <div className="card">
        {/* Card Header */}
        <div className="card-header">
          <strong>
            <i className="fa fa-table"></i> Results
          </strong>
        </div>

        <div className="card-body" id="article-section">
          {result.map((headlines, index) => 
            <div key={index} className="alert alert-warning" role="alert">
              {headlines.headline.print_headline ?
                <a href={headlines.web_url} target="_blank">{headlines.headline.print_headline}</a>
                :
                <a href={headlines.web_url} target="_blank">{headlines.headline.main}</a>
              }
              <button type="button" id={index} onClick={() => saveButton(index)} className="float-right btn btn-primary">Save</button>
            </div>
          )}
        </div>

      </div>

    </div>
  </div>
);

export default Results;