import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Favorite from './Favorite.jsx';
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
      if (quantity > 14) {
        quantity = 14;
      }
      var numList = Array.from({length: quantity}, (_, i) => i + 2);
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
    event.preventDefault();
    if (size === 'SELECT SIZE') {
      setNotice(true);
    }
    if (size !== 'SELECT SIZE' && quantity !== 0) {
      addToCart();
      reset();
    }
  }

  return (
    <div>
      {notice && <div className='p_notice'>Please select size</div>}
      <div className='p_flex_container'>
        <div className='p_flex_child_size'>
          <select onChange={selectSize} className='p_select'>
            <option>SELECT SIZE</option>
            {props.style.length ?
              Object.values(props.style[props.styleNum].skus).map((item, index) => {
                return (
                  <option key={index} value={item.size} className='p_dropdown'>{item.size}</option>
                )
              })
            :
              <option>OUT OF STOCK</option>
            }
          </select>
        </div>

        <div className='p_flex_child_quantity'>
          {size === 'SELECT SIZE' ?
            <select className='p_select'>
              <option>-</option>
            </select>
          :
            <select onChange={pickQuantity} className='p_select'>
              <option>1</option>
              {selectQuantity().map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          }
        </div>
      </div>

      {props.style.length ?
        <Button variant='dark' type='button' className='btn btn-default btn-sm p_flex_child_cart' onClick={handleClick}>
          <b> Add to Cart +</b>
        </Button>
      :
        null
      }
      <Favorite style={props.style}/>
    </div>

  );
}

export default Cart;