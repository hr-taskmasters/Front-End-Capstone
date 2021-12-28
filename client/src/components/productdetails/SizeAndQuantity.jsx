import React, {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function SizeAndQuantity(props) {

  const [size, setSize] = useState('SELECT SIZE');
  const [quantity, setQuantity] = useState(0);

  const selectSize = (e) => {
    setSize(e.target.value);
  }

  console.log(props.style[props.styleNum])

  return (
    <div className='p_flex_container'>

      <div className='p_flex_child_size'>
        <select onChange={selectSize}>
          <option>SELECT SIZE</option>
          {props.style.length ?
            Object.values(props.style[props.styleNum].skus).map((item, index) => <option key={index} value={Object.values(item)[1]}>{Object.values(item)[1]}</option>)
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
          <select>
            <option>SELECT QUANTITY</option>
            {/* {props.style.length ?
              Object.values(props.style[props.styleNum].skus
            } */}
            <option>+</option>
          </select>
        }
      </div>
    </div>
  );
}

export default SizeAndQuantity;