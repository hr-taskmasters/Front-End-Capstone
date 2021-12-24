import React, { useState, useEffect } from 'react';

//sample data. Need to make /products/:id/styles query to retrieve
import styleCall from './sampleDataProductCard.js';

const ProductCard = (props) => {

  let category = props.product.category.toUpperCase();
  let imageUrl = styleCall.results[0].photos[0].thumbnail_url;
  let expandedProductName = props.product.name + ' - ' + styleCall.results[0].name;
  let price = styleCall.results[0].original_price;
  let rating =

  return (
    <div>
      <img src={imageUrl}/>
      <div>
        <div>{category}</div>
        <div>{expandedProductName}</div>
        <div>${price}</div>
        <div>Star Rating</div>
      </div>
    </div>
  )
}

export default ProductCard;