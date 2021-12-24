import React, {useState, useEffect} from 'react';
import StarRating from './StarRating.jsx';
import Thumbnail from './Thumbnail.jsx';

function ProductInfo(props) {

  console.log(props);

  return (
    <div className="row">

      <div className="col-md-3 col-sm-6">
          <div className="product-grid">
              <div className="product-image">
                  <a href="#">
                      {props.style.length ?
                      <img className="pic" src={props.style[0].photos[0].url} />
                      :
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      }
                  </a>
              </div>
              <StarRating />
              <div className="product-content">
                  <h4>{props.info.category}</h4>
                  <h1 className="p_title"><a href="#">{props.info.name}</a></h1>
                  <div className="p_price">${props.info.default_price}
                      <span>$200.00</span>
                  </div>
                  <div>
                    <b>STYLE > </b><span>SELECTED STYLE</span>
                    <Thumbnail style={props.style}/>
                  </div>
                  <a className="add-to-cart" href="">+ Add To Cart</a>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ProductInfo;