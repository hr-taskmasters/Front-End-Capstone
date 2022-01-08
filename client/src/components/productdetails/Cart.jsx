import React, {useState, useEffect} from 'react';
import Favorite from './Favorite.jsx';
import AddToCart from './AddToCart.jsx';
import axios from 'axios';
import API_KEY from '../../config/config.js';

function Cart(props) {
  const [size, setSize] = useState('SELECT SIZE');
  const [quantity, setQuantity] = useState(0);
  const [notice, setNotice] = useState(false);

  useEffect(() => {
    reset();
  }, [props])

  const reset = () => {
    setSize('SELECT SIZE');
    setQuantity(0);
  }

  const selectSize = (e) => {
    setSize(e.target.value);
    setNotice(false);
  }

  const selectQuantity = () => {
    if (props.style.length && size !== 'SELECT SIZE') {
      var quantity = Object.values(props.style[props.styleNum].skus).filter((item) => {
        return item.size === size;
      })[0].quantity;
      if (quantity > 15) {
        quantity = 15;
      }
      var numList = Array.from({length: quantity}, (_, i) => i + 1);
      return numList;
    }
  }

  const pickQuantity = (e) => {
    setQuantity(e.target.value);
  }

  const sku = () => {
    var skus = props.style[props.styleNum].skus;
    var skus_id;
    for (var key in skus) {
      if (skus[key].size === size) {
        skus_id = key;
      }
    }
    return skus_id;
  }

  const addToCart = () => {
    var data = {
      'sku_id': sku(),
      'count': quantity
    };
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/cart', data, {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then(response => {
      alert('Added to Cart!');
    })
    .catch(err => {
      console.error(err);
    })
  }

  const handleClick = () => {
    if (size === 'SELECT SIZE') {
      setNotice(true);
    }
    if (size !== 'SELECT SIZE' && quantity !== 0) {
      addToCart();
      reset();
    }
  }

  const checkQuantity = () => {
    const sizeAndQuantity = Object.values(props.style[props.styleNum].skus);
    if (sizeAndQuantity[0].size) {
      return (
        <select onChange={selectSize} className='p_select'>
          <option>SELECT SIZE</option>
          {sizeAndQuantity.map((item, index) => (
            <option key={index} value={item.size} className='p_dropdown'>{item.size}</option>
          ))}
        </select>
      )
    } else {
      return (
        <select className='p_select'>
          <option>OUT OF STOCK</option>
        </select>
      )
    }
  }

  return (
    <div>
      {notice && <div className='p_notice'>Please select size</div>}
      <div className='p_flex_container'>
        <div className='p_flex_child_size'>
            {props.style.length &&
              checkQuantity()
            }
        </div>

        <div className='p_flex_child_quantity'>
          {size === 'SELECT SIZE' ?
            <select className='p_select'>
              <option>-</option>
            </select>
          :
            <select onChange={pickQuantity} className='p_select'>
              {selectQuantity().map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          }
        </div>
      </div>

      {props.style.length && Object.values(props.style[props.styleNum].skus)[0].size ?
        <AddToCart handleClick={handleClick} />
      :
        null
      }
      <Favorite style={props.style}/>
    </div>

  );
}

export default Cart;