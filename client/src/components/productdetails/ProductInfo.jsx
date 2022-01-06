import React, {useState, useEffect} from 'react';
import StarRating from './StarRating.jsx';
import Thumbnail from './Thumbnail.jsx';
import Cart from './Cart.jsx';
import Image from './Image.jsx';
import Favorite from './Favorite.jsx';
import Price from './Price.jsx';
import Share from './Share.jsx';
import Feature from './Feature.jsx';

function ProductInfo(props) {

  const [styleNum, setStyleNum] = useState(0);
  const [expand, setExpand] = useState(false);

  const handleClick = (index) => {
    setStyleNum(index);
  }

  const expandMode = () => {
    setExpand(true);
  }

  const exitExpandMode = () => {
    setExpand(false);
  }

  useEffect(() => {
    setStyleNum(0);
  }, [props])

  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='product-grid'>
            <Image
              style={props.style}
              styleNum={styleNum}
              expand={expand}
              expandMode={expandMode}
              exitExpandMode={exitExpandMode}
            />
          </div>
        </div>
        {!expand &&
          <div className='product-content col-md-5'>
            <StarRating ratings={props.ratings}/>
            <h4>{props.info.category}</h4>
            <h2 className='p_title'><a href='#'>{props.info.name}</a></h2>
            <Price info={props.info} style={props.style} styleNum={styleNum} />
            <div className='p_style'>
              <b>STYLE > </b><span>{props.style[styleNum] ? props.style[styleNum].name : null}</span>
              <Thumbnail style={props.style} styleNum={styleNum} handleClick={handleClick}/>
            </div>
            <Cart style={props.style} styleNum={styleNum}/>
          </div>
        }
      </div>

      <table className='p_wrapper'>
        <thead>
          <tr>
            <th className='p_description'>DESCRIPTION:</th>
            <th className='p_features'>FEATURES:</th>
            <th className='p_share'>SHARE:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.info.description}</td>
            <td>{props.info.features && (
              <Feature features={props.info.features}/>
            )}
            </td>
            <td><Share /></td>
          </tr>
        </tbody>
      </table>



    </div>

  );
};

export default ProductInfo;