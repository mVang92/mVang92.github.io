import axios from "axios";

export default {
  // Get all of the articles from the database
  getArticles: function () {
    return axios.get("/api/articles");
  },
  // Take the topic and years from the user and put them in the queryURL with API key
  searchArticle: function (topic, startYear, endYear) {
    const apiKey = "03401e1f08b24aa185b5bb4d3771714c";
    const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}0101`;
    return axios.get(queryUrl);
  },
  // Take the title, url, and date and post them to the database to save
  saveArticle: function (articleData) {
    console.log(articleData)
    return axios.post("/api/articles/", {
      title: articleData.articleData.headline.main,
      url: articleData.articleData.web_url,
      date: articleData.articleData.pub_date
    })
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  // Removes the selected article from the database
  deleteArticle: function (articleData) {
    return (
      axios.delete(`/api/articles/${articleData}`)
    )
  }
}
