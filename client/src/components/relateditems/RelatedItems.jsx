import React from 'react';
import ProductCard from './ProductCard.jsx';
import {Carousel} from 'react-bootstrap';
import ListCarousel from './ListCarousel.jsx';

//sample data
import initialState from './data/sampleDataProduct.js';
import getProducts from './data/sampleDataProducts.js';

const RelatedItems = (props) => {

  return (
    <div>
      <ListCarousel items={getProducts} />
    </div>

    // <Carousel variant="dark">
    //   <Carousel.Item>
    //     <ProductCard product={initialState.products[0]} ratings={props.ratings}/>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <ProductCard product={initialState.products[0]} ratings={props.ratings}/>
    //   </Carousel.Item>
    // </Carousel>
  )
}

export default RelatedItems;