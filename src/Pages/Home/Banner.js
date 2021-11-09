import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Zmh7pGP/rsz-top-view-wooden-kids-toys-with-copy-space.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Sunny moij toys</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/XjfPSb9/Kid-boy-room-interior-vector-illustration-of-modern-bedroom-furniture-in-blue-Scandinavian-style-Car.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>meriton toys</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/w7SFnk7/rsz-non-binary-kid-playing-with-colorful-game-home.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Elephent toys</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
