import React, { Component } from "react";
import Panel from "../../components/Panel";
import Results from "../../components/Results";
import Save from "../../components/Save";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";

class Main extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: []
  };

  // This function starts our app by calling the loadArticles function
  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ saved: res.data, topic: "", startYear: "", endYear: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When search button is clicked and top and years are met,
  // call the searchArticle function within API.js file.
  // Pass in the search criteria as parameters
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYear && this.state.endYear) {
      API.searchArticle(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => {
          this.setState({ articles: res.data.response.docs });
          this.loadArticles();
        })
        .catch(err => console.log(err));
    }
  };

  handleSaveButton = (event, id) => {
    event.preventDefault();
    const articleData = this.state.articles.find(article => article._id === id);
    API.saveArticle({ articleData })
      .then((results) => {
        const filteredResults = this.state.articles.filter(article => article._id !== id)
        this.setState({ articles: filteredResults });
        this.loadArticles();
      })
  };

  handleDeleteButton = (event, id) => {
    event.preventDefault();
    API.deleteArticle(id)
      .then((results) => {
        this.loadArticles();
      })
  };

  render() {
    return (
      <div className="wrapper">
        {/* Input Panel */}
        <Panel>
          <h5 className="panelName">Search</h5>
          <form>
            <div className="inputName">Topic</div>
            <Input
              value={this.state.topic}
              onChange={this.handleInputChange}
              name="topic"
              placeholder="Article topic (required)"
            />
            <div className="inputName">Start Year</div>
            <Input
              value={this.state.startYear}
              onChange={this.handleInputChange}
              name="startYear"
              placeholder="Start Year (required)"
            />
            <div className="inputName">End Year</div>
            <Input
              value={this.state.endYear}
              onChange={this.handleInputChange}
              name="endYear"
              placeholder="End Year (required)"
            />
            <FormBtn
              // Disable search button except when all fields are filled
              disabled={!(this.state.startYear && this.state.topic && this.state.endYear)}
              onClick={this.handleFormSubmit}
            >
              Search
          </FormBtn>
          </form>
        </Panel>
        {/* Search Results */}
        <Panel>
          <h5 className="panelName">Results</h5>
          {this.state.articles.length ? (
            <div>
              {this.state.articles.map(article => (
                <Results
                  url={article.web_url}
                  title={article.headline.main}
                  date={article.pub_date}
                  key={article._id}
                  _id={article._id}
                  handleSaveButton={this.handleSaveButton}
                />
              ))}
            </div>
          ) : (
              <h4 className="red-text text-darken-2 center-align">No Results to Display</h4>
            )}
        </Panel>
        {/* Saved Results */}
        <Panel>
          <h5 className="panelName">Saved Articles</h5>
          {this.state.saved.length ? (
            <div>
              {this.state.saved.map(article => (
                <Save
                  url={article.url}
                  title={article.title}
                  date={article.date}
                  key={article._id}
                  _id={article._id}
                  handleDeleteButton={this.handleDeleteButton}
                />
              ))}
            </div>
          ) : (
              <h4 className="red-text text-darken-2 center-align">No Saved Articles to Display</h4>
            )}
        </Panel>
      </div>
    );
  }
}

export default Main;
