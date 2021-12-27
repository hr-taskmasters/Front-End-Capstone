import React from 'react';
import {Carousel} from 'react-bootstrap';

class PictureCarousel extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <Carousel variant="dark">
        <Carousel.Item>
          ITEM 1
        </Carousel.Item>
        <Carousel.Item>
          ITEM 2
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default PictureCarousel;