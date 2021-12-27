import React, {useState, useEffect} from 'react';
import StarRating from './StarRating.jsx';
import Thumbnail from './Thumbnail.jsx';
import SizeAndQuantity from './SizeAndQuantity.jsx';
import Image from './Image.jsx';
import Cart from './Cart.jsx';
import Favorite from './Favorite.jsx';


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
        <StarRating />
        <h4>{props.info.category}</h4>
        <h1 className='p_title'><a href='#'>{props.info.name}</a></h1>
        <Price />
        <div>
          <b>STYLE > </b><span>{props.style[styleNum] ? props.style[styleNum].name : null}</span>
          <Thumbnail style={props.style} styleNum={styleNum} handleClick={handleClick}/>
        </div>
        <SizeAndQuantity />
        <Cart />
        <Favorite />
        <p>
          {props.info.description}
        </p>
        <div>
          <a className='p_share_icon' href='https://www.facebook.com/'>
            <i className='fab fa-facebook-square fa-lg'></i>
          </a>
          <a className='p_share_icon' href='https://twitter.com/home'>
            <i className='fab fa-twitter-square fa-lg'></i>
          </a>
          <a className='p_share_icon' href='https://www.pinterest.com/'>
            <i className='fab fa-pinterest-square fa-lg'></i>
          </a>
        </div>
      </div>

    </div>
  );
};

export default ProductInfo;