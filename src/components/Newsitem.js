import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, img, newsUrl, author, day, source } = this.props;
    return (
      <div>
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zindex: "1" }}
          >
            {" "}
            {source}
          </span>
          <img
            src={img}
            className="card-img-top"
            style={{ height: "200px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank " className="btn btn-dark mb-2">
              Read More
            </a>
            <div className="card-footer text-body-secondary">
              By: {author} published on: {new Date(day).toGMTString()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
