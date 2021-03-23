import React from "react";
import { Container, Image } from "react-bootstrap";
import Directory from "../../components/Directory/Directory.jsx";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className='Homepage'>
      {/* <Carousel>
        <Carousel.Item>
          <img
            className='image'
            src='https://www.fashionremix.com/wp-content/uploads/2019/12/hot-top.jpg'
            alt='cover'
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='image'
            src='https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1514&q=80'
            alt='cover'
          />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

      <Container className='container'>
        <Image
          className='image'
          src='https://www.fashionremix.com/wp-content/uploads/2019/12/hot-top.jpg'
          alt='cover-image'
        />
        <Directory />
      </Container>
    </div>
  );
};

export default Homepage;
