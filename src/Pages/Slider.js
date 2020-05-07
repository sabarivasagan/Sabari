import React from "react";
import "../css/style.css";
import { Carousel } from "react-bootstrap";

export class Slider extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="slider-img d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327_960_720.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Android Developer</h3>
              <p>Hello, I'm a awesome android developer</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slider-img d-block w-100"
              src="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>UI/UX Developer</h3>
              <p>
                I develop website using Bootstrap and Materialize CSS front-end
                framework..
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slider-img d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132_960_720.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Web designer</h3>
              <p>Amazing free responsive website for free, enjoy!!!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
