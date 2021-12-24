import React from 'react';
import ProductCard from './ProductCard.jsx';

//sample data
import initialState from './sampleDataProduct.js';

const RelatedItems = (props) => {

  return (
    <ProductCard product={initialState.products[0]} ratings={props.ratings}/>
  )
}

export default RelatedItems;