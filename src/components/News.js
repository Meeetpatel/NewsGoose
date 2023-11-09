import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };

    document.title = `${this.props.category}-NewsGoose`;
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7de94414c4784df19f12fd37ae732c0f&page=1&pagesize=${this.props.pagesize}`;

    this.setState({ loading: true });
    this.props.setProgress(10);
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  handleNextClick = async () => {
    this.props.setProgress(10);
    console.log("next");
    let nextPage = this.state.page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7de94414c4784df19f12fd37ae732c0f&page=${nextPage}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState((prevState) => ({
      page: prevState.page + 1,
      articles: parsedData.articles,
      loading: false,
    }));
    this.props.setProgress(100);
  };

  handlePreviousClick = async () => {
    this.props.setProgress(10);
    if (this.state.page > 1) {
      let prevPage = this.state.page - 1;
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${prevPage}&pagesize=${this.props.pagesize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState((prevState) => ({
        page: prevState.page - 1,
        articles: parsedData.articles,
        loading: false,
      }));
      this.props.setProgress(100);
    }
  };

  render() {
    return (
      <div className="container my-3 text-center">
        <h1 className="mb-5">
          Top headlines of Today in {this.props.category}
        </h1>
        {this.state.loading && <Spinner></Spinner>}
        <div className="row ">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 mb-4" key={element.url}>
                  <Newsitem
                    source={element.source.name}
                    title={element.title ? element.title.slice(0, 70) : ""}
                    author={element.author ? element.author : "Unknown"}
                    day={element.publishedAt ? element.publishedAt : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    img={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/09/Tesla-AI-Day-2022-invite.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"
                    }
                    newsUrl={element.url}
                  ></Newsitem>
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous Page
          </button>

          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalArticles / 18)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next Page &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
