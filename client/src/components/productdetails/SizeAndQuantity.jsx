import React, {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function SizeAndQuantity(props) {

  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(0);

  return (
    <div className='p_flex_container'>
      <div className='p_flex_child_size'>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button" variant="light">SELECT SIZE</Dropdown.Toggle>

          <Dropdown.Menu variant="white">
            {props.style.length ?
              Object.values(props.style[props.styleNum].skus).map((item, index) => <Dropdown.Item key={index}>{Object.values(item)[1]}</Dropdown.Item>
              )
            :
              <Dropdown.Item>OUT OF STOCK</Dropdown.Item>
            }
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className='p_flex_child_quantity'>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button" variant="light">QUANTITY</Dropdown.Toggle>

          <Dropdown.Menu variant="white">
            <Dropdown.Item href="#/action-1" active>1</Dropdown.Item>
            <Dropdown.Item href="#/action-1">2</Dropdown.Item>
            <Dropdown.Item href="#/action-2">3</Dropdown.Item>
            <Dropdown.Item href="#/action-3">4</Dropdown.Item>
            <Dropdown.Item href="#/action-3">5</Dropdown.Item>
            <Dropdown.Item href="#/action-3">6</Dropdown.Item>
            <Dropdown.Item href="#/action-3">7</Dropdown.Item>
            <Dropdown.Item href="#/action-3">8</Dropdown.Item>
            <Dropdown.Item href="#/action-3">9</Dropdown.Item>
            <Dropdown.Item href="#/action-3">10</Dropdown.Item>
            <Dropdown.Item href="#/action-3">11</Dropdown.Item>
            <Dropdown.Item href="#/action-3">12</Dropdown.Item>
            <Dropdown.Item href="#/action-3">13</Dropdown.Item>
            <Dropdown.Item href="#/action-3">14</Dropdown.Item>
            <Dropdown.Item href="#/action-3">15</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default SizeAndQuantity;