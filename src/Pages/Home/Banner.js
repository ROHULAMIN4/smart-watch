import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-psd/smartwatch-mockup-three_23-2147862181.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="tile-heading-img">Rolex Brand</h3>
            <p className="banner-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              deserunt accusamus possimus, quae blanditiis provident explicabo
              architecto asperiores nihil illo quod impedit suscipit et omnis
              harum aliquid minus officia velit, esse repellendus deleniti quia
              cumque reiciendis. Exercitationem placeat, fugit sit debitis
              voluptatum ipsum odio magni inventore, dolorem consectetur
              accusamus quisquam!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="tile-heading-img">Apple Brand</h3>
            <p className="banner-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              deserunt accusamus possimus, quae blanditiis provident explicabo
              architecto asperiores nihil illo quod impedit suscipit et omnis
              harum aliquid minus officia velit, esse repellendus deleniti quia
              cumque reiciendis. Exercitationem placeat, fugit sit debitis
              voluptatum ipsum odio magni inventore, dolorem consectetur
              accusamus quisquam!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/watch-set-expensive-classic-clock-with-leather-metal-straps-illustration_1284-51537.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="tile-heading-img">Zinlex Brand</h3>
            <p className="banner-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              deserunt accusamus possimus, quae blanditiis provident explicabo
              architecto asperiores nihil illo quod impedit suscipit et omnis
              harum aliquid minus officia velit, esse repellendus deleniti quia
              cumque reiciendis. Exercitationem placeat, fugit sit debitis
              voluptatum ipsum odio magni inventore, dolorem consectetur
              accusamus quisquam!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
