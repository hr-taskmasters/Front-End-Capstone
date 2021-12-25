import React, {useState, useEffect} from 'react';
import StarRating from './StarRating.jsx';
import Thumbnail from './Thumbnail.jsx';
import SizeAndQuantity from './SizeAndQuantity.jsx';
import Image from './Image.jsx';
import Cart from './Cart.jsx';
import Favorite from './Favorite.jsx';


function ProductInfo(props) {

  return (
    <div className="row">

      <div className="col-md-6">
        <div className="product-grid">
          <Image style={props.style}/>
        </div>
      </div>
      <div className="product-content col-md-5">
        <StarRating />
        <h4>{props.info.category}</h4>
        <h1 className="p_title"><a href="#">{props.info.name}</a></h1>
        <div className="p_price">${props.info.default_price}
            <span>{props.info.sale_price ? $props.info.sale_price : null}</span>
        </div>
        <div>
          <b>STYLE > </b><span>SELECTED STYLE</span>
          <Thumbnail style={props.style}/>
        </div>
        <SizeAndQuantity />
        <Cart />
        <Favorite />
      </div>

    </div>
  );
};

export default ProductInfo;