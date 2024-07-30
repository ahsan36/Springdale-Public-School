import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import logo from '../../../images/logo.jpeg'

function Home() {
  return (
    <div className="home">

      <header className="home-header">
        <img src={logo} alt="Springdale Public School" className="logo" />
        <h1>Welcome to Springdale Public School</h1>
        <p>Where we nurture young minds for a brighter future.</p>
      </header>

      <Carousel className="home-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://tinyurl.com/25puco22'
            alt="Annual Sports Day"
          />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://tinyurl.com/29gu4fwq'
            alt="Science Exhibition"
          />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://tinyurl.com/2323y8g3'
            alt="Cultural Fest"
          />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default Home;

