import React from 'react';
import ProductCard from './ProductCard.jsx';
import {Carousel} from 'react-bootstrap';

//sample data
import initialState from './sampleDataProduct.js';

const RelatedItems = (props) => {

  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <ProductCard product={initialState.products[0]} ratings={props.ratings}/>
      </Carousel.Item>
      <Carousel.Item>
        <ProductCard product={initialState.products[0]} ratings={props.ratings}/>
      </Carousel.Item>
    </Carousel>
  )
}

export default RelatedItems;