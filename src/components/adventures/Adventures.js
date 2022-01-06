import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import adventures from "../../data/adventures.json";
import Card from "react-bootstrap/Card";
import "./Adventures.css";
const getNextAdventures = (adventures) => {
  var rows = [];
  console.log("inside get recent adventures:", adventures);
  if (adventures) {
    adventures.map((adventure, index) => {
      if (index < 4) {
        rows.push(
          <div className="col">
            <Card style={{ width: "16rem" }} className="h-100" border="light">
              <Card.Img
                variant="top"
                className="image-size"
                src={adventure.imageUrl}
              />
              <Card.Body>
                <Card.Title className="text-uppercase fw-bold">
                  {adventure.title}
                </Card.Title>
                <Card.Text className="ellipsis text-uppercase">
                  {adventure.description}
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

const getAllAdventures = (adventures) => {
  var rows = [];
  console.log("inside get recent adventures:", adventures);
  if (adventures) {
    adventures.map((adventure, index) => {
      rows.push(
        <div className="col">
          <Card style={{ width: "16rem" }} className="h-100" border="light">
            <Card.Img
              variant="top"
              className="image-size"
              src={adventure.imageUrl}
            />
            <Card.Body>
              <Card.Title className="text-uppercase fw-bold">
                {adventure.title}
              </Card.Title>
              <Card.Text className="ellipsis text-uppercase">
                {adventure.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
  return rows;
};

const Adventures = ({ nextadventures }) => {
  const [allAdventures, setAllAdventures] = useState([]);
  useEffect(() => {
    console.log("Inside effect:", adventures);
    setAllAdventures(adventures);
  }, []);

  return (
    <div>
      {nextadventures && (
        <div>
          <br />
          <br />
          <div className="container-sm">
            <hr />
          </div>
          <div className="container-sm">
            <h2>Next Adventures</h2>
            <hr className="hr-line" />
          </div>
          <div className="container-fluid">
            <Carousel fade indicators="false">
              <Carousel.Item>
                <img
                  className="d-block carousel-image"
                  src="https://wknd.site/us/en/_jcr_content/root/container/teaser.coreimg.60.1600.jpeg/1636662642570/adobestock-140634652.jpeg"
                  alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                  <h3>Climbing New Zealand</h3>
                  <p>
                    Let us help you make your New Zealand climbing vacation a
                    memory you will cherish forever! Come join us for a guided
                    rock climbing adventure in the mountains that trained Sir
                    Edmund Hilary.
                  </p>
                  <button className="btn view-trips-button">see trip</button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <br />
          <br />
          <div className="container-sm">
            <h2>Where do you want to go?</h2>
            <br />
            <div className="card-group">{getNextAdventures(allAdventures)}</div>
            <br />
            <button className="btn btn-lg view-trips-button">All trips</button>
          </div>
          <br />
          <br />
          <div className="container-sm">
            <hr />
          </div>
        </div>
      )}
      {nextadventures === false && (
        <div>
          <div className="container-sm">
            <h2>Current Adventures</h2>
            <hr className="hr-line" />
            <div className="card-group">{getAllAdventures(allAdventures)}</div>
          </div>
          <br />
          <br />
          <div className="container-sm">
            <hr />
          </div>
        </div>
      )}
    </div>
  );
};

export default Adventures;
