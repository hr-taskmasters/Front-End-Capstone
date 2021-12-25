import React, { useState, useEffect } from 'react';
import ActionButton from './ActionButton.jsx';

//sample data. Need to make /products/:id/styles query to retrieve
import styleCall from './data/sampleDataProductCard.js';

const ProductCard = (props) => {

  let category = props.product.category.toUpperCase();
  let imageUrl = styleCall.results[0].photos[0].thumbnail_url;
  let expandedProductName = props.product.name + ' - ' + styleCall.results[0].name;
  let price = styleCall.results[0].original_price;
  let totalRatings = (Number(props.ratings[1]) + Number(props.ratings[2]) + Number(props.ratings[3]) + Number(props.ratings[4]) + Number(props.ratings[5]))
  let rating = (Number(props.ratings[1]) * 1 + Number(props.ratings[2]) * 2 + Number(props.ratings[3]) * 3 + Number(props.ratings[4]) * 4 + Number(props.ratings[5]) * 5)/ totalRatings;

  return (
    <div>
      <img src={imageUrl}/>
      <ActionButton />
      <div>
        <div>{category}</div>
        <div>{expandedProductName}</div>
        <div>${price}</div>
        <div>{(props.ratings[1] === "" && props.ratings[2] === "" && props.ratings[3] === "" && props.ratings[4] === "" && props.ratings[5] === "")
               ? 'Loading...' : rating}</div>
      </div>
    </div>
  )
}

export default ProductCard;