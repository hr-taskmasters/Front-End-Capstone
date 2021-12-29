import React, {useState, useEffect} from 'react';
import StarRating from './StarRating.jsx';
import Thumbnail from './Thumbnail.jsx';
import Cart from './Cart.jsx';
import Image from './Image.jsx';
import Favorite from './Favorite.jsx';
import Price from './Price.jsx';
import Share from './Share.jsx';

function ProductInfo(props) {

  const [styleNum, setStyleNum] = useState(0);

  const handleClick = (index) => {
    setStyleNum(index);
  }

  return (
    <div className='row'>
      <div className='col-md-6'>
        <div className='product-grid'>
          <Image style={props.style} styleNum={styleNum}/>
        </div>
      </div>
      <div className='product-content col-md-5'>
        <StarRating ratings={props.ratings}/>
        <h4>{props.info.category}</h4>
        <h1 className='p_title'><a href='#'>{props.info.name}</a></h1>
        <Price info={props.info} style={props.style} styleNum={styleNum} />
        <div>
          <b>STYLE > </b><span>{props.style[styleNum] ? props.style[styleNum].name : null}</span>
          <Thumbnail style={props.style} styleNum={styleNum} handleClick={handleClick}/>
        </div>
        <Cart style={props.style} styleNum={styleNum}/>
        <Favorite />
        <p>
          {props.info.description}
        </p>
        <Share />
      </div>

    </div>
  );
};

export default ProductInfo;