import axios from "axios";

export default {
  // Get all of the articles from the database
  getArticles: () => {
    return axios.get("/api/articles");
  },
  // Take the topic and years from the user and put them in the queryURL with API key
  searchArticle: (topic, startYear, endYear) => {
    const apiKey = "M263NCR10mhAsJI7LAG0GM570a7ILBmY";
    const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}0101`;
    return axios.get(queryUrl);
  },
  // Take the title, url, and date and post them to the database to save
  saveArticle: articleData => {
    // console.log(articleData)
    return axios.post("/api/articles/", {
      title: articleData.articleData.headline.main,
      url: articleData.articleData.web_url,
      date: articleData.articleData.pub_date
    })
      .then(response => {
      })
      .catch(error => {
        console.log(error);
      });
  },
  // Removes the selected article from the database
  deleteArticle: articleData => {
    return (
      axios.delete(`/api/articles/${articleData}`)
    )
  }
}
