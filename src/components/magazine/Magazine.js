import React from "react";
import "./Magazine.css";
const Magazine = () => {
  return (
    <div class="container-sm flex-container">
      <div className="col-md-5 flex-item featured-article">
        <h5>Featured Article</h5>
        <h2>Camping in Western Australia</h2>
        <p className="featured-article-description">
          The Australian West coast is a camper’s heaven. Endless miles of
          desert roads leading to secret beaches, vast canyons and crystal clear
          rivers, and the very few people you are likely to meet on your journey
          will be some of the most easy-going characters you’ll find anywhere in
          the world.
        </p>
        <button className="btn full-article-button">Full Article</button>
      </div>
      <div className="col-md-7 image-container flex-item">
        <img
          src="https://wknd.site/us/en/_jcr_content/root/container/container/teaser.coreimg.60.1600.jpeg/1636662642430/adobestock-156407519.jpeg"
          alt="featured-article"
          className="featured-image"
        />
      </div>
    </div>
  );
};

export default Magazine;
