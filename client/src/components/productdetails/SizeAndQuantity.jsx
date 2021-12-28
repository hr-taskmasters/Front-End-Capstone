import React, {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function SizeAndQuantity(props) {

  const [size, setSize] = useState('SELECT SIZE');
  const [quantity, setQuantity] = useState(0);
  const [index, setIndex] = useState(null);

  const selectSize = (e) => {
    setSize(e.target.value);
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

  return (
    <div className='p_flex_container'>

      <div className='p_flex_child_size'>
        <select onChange={selectSize}>
          <option>SELECT SIZE</option>
          {props.style.length ?
            Object.values(props.style[props.styleNum].skus).map((item, index) => {
              return (
                <option key={index} value={item.size}>{item.size}</option>
              )
            })
          :
            <option>OUT OF STOCK</option>
          }
        </select>
      </div>

      <div className='p_flex_child_quantity'>
        {size === 'SELECT SIZE' ?
          <select>
            <option>-</option>
          </select>
        :
          <select onChange={pickQuantity}>
            <option>SELECT QUANTITY</option>
            {selectQuantity().map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        }
      </div>
    </div>
  );
}

export default SizeAndQuantity;