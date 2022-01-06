import React, { useEffect, useState } from "react";
import "./Magazine.css";
import Card from "react-bootstrap/Card";
import articles from "../../data/articles.json";
// const fetchArticles = () => {
//   fetch("articles.json").then((response) => {
//     console.log(response);
//     return response.json();
//   });
// };

const getRecentArticles = (articles) => {
  var rows = [];
  console.log("inside get recent articles:", articles);
  if (articles) {
    articles.map((article, index) => {
      if (index < 4) {
        rows.push(
          <div className="col">
            <Card style={{ width: "16rem" }} className="h-100" border="light">
              <Card.Img
                variant="top"
                className="image-size"
                src={article.imageUrl}
              />
              <Card.Body>
                <Card.Title className="text-uppercase fw-bold">
                  {article.title}
                </Card.Title>
                <Card.Text className="ellipsis text-uppercase">
                  {article.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      }
    });
  }
  return rows;
};

const getAllArticles = (articles) => {
  var rows = [];
  console.log("inside get recent articles:", articles);
  if (articles) {
    articles.map((article, index) => {
      rows.push(
        <div className="col">
          <Card style={{ width: "16rem" }} className="h-100" border="light">
            <Card.Img
              variant="top"
              className="image-size"
              src={article.imageUrl}
            />
            <Card.Body>
              <Card.Title className="text-uppercase fw-bold">
                {article.title}
              </Card.Title>
              <Card.Text className="ellipsis text-uppercase">
                {article.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
  return rows;
};
const Magazine = ({ recentArticles }) => {
  const [allArticles, setAllArticles] = useState([]);
  useEffect(() => {
    console.log("Inside effect:", articles);
    setAllArticles(articles);
  }, []);
  console.log("Articles :", articles);
  console.log("AllArticles :", allArticles);
  if (allArticles) {
    return (
      <div>
        <div className="container-sm flex-container">
          <div className="col-md-5 flex-item featured-article">
            <h5>Featured Article</h5>
            <h2>Camping in Western Australia</h2>
            <p className="featured-article-description">
              The Australian West coast is a camper’s heaven. Endless miles of
              desert roads leading to secret beaches, vast canyons and crystal
              clear rivers, and the very few people you are likely to meet on
              your journey will be some of the most easy-going characters you’ll
              find anywhere in the world.
            </p>
            <button className="btn full-article-button btn-lg">
              Full Article
            </button>
          </div>
          <div className="col-md-7 image-container flex-item">
            <img
              src="https://wknd.site/us/en/_jcr_content/root/container/container/teaser.coreimg.60.1600.jpeg/1636662642430/adobestock-156407519.jpeg"
              alt="featured-article"
              className="featured-image"
            />
          </div>
        </div>
        <br />
        <br />
        {recentArticles && (
          <div>
            <div className="container-sm">
              <h2>Recent Articles</h2>
              <hr className="hr-line" />
              <div className="card-group">{getRecentArticles(allArticles)}</div>
            </div>
            <br />
            <div className="container-sm">
              <button className="btn btn-lg full-article-button">
                All Articles
              </button>
            </div>
          </div>
        )}
        {recentArticles === false && (
          <div>
            <div className="container-sm">
              <h2>All Articles</h2>
              <hr className="hr-line" />
              <div className="card-group">{getAllArticles(allArticles)}</div>
            </div>
            <br />
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Magazine;
