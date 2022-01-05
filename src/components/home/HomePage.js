import React from "react";
import "./Homepage.css";
import Carousel from "react-bootstrap/Carousel";
import Magazine from "../magazine/Magazine";

const HomePage = () => {
  return (
    <div class="container-fluid">
      <Carousel fade indicators="false">
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="https://wknd.site/us/en/_jcr_content/root/container/carousel/item_1571954853062.coreimg.60.1600.jpeg/1636662642365/adobestock-216674449.jpeg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>WKND Adventures</h3>
            <p>
              Join us on one of our next adventures. Browse our list of curated
              experiences and sign up for one when you're ready to explore with
              us.
            </p>
            <button className="btn view-trips-button">view trips</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="https://wknd.site/us/en/_jcr_content/root/container/carousel/item_1572035298405.coreimg.60.1600.jpeg/1636662642377/beach-walking.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>San Diego Surf Spots </h3>
            <p>
              From the hippie beaches of Ocean Beach to the ritzy shores of La
              Jolla and everywhere in between. Discover the San Diego surf
              scene.
            </p>
            <button className="btn view-trips-button">Read Article</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="https://wknd.site/us/en/_jcr_content/root/container/carousel/teaser.coreimg.60.1600.jpeg/1636662642389/adobestock-185234795.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Downhill Skiing Wyoming</h3>
            <p>
              A skiers paradise far from crowds and close to nature with terrain
              so vast it appears uncharted.
            </p>
            <button className="btn view-trips-button">view trip</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <br />
      <Magazine />
    </div>
  );
};

export default HomePage;
