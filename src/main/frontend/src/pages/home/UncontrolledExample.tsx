import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Michigan from '../home/itineraries/Michigan.png'
import Florida from '../home/itineraries/Florida.png';

function UncontrolledExample() {
    const images = [
        Michigan,
        Florida
    ];
  return (
    <Carousel>
      <Carousel.Item>
        <img className={'feature-itineraries-img'} src={images[0]}/>
        <Carousel.Caption>
          <h2>Michigan</h2>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className={'feature-itineraries-img'} src={images[1]}/>
        <Carousel.Caption>
          <h2>Florida</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;