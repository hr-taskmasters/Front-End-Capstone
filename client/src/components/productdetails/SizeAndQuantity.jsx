import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function SizeAndQuantity() {

  return (
    <div className='p_flex_container'>
      <div className='p_flex_child_size'>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button" variant="light">SELECT SIZE</Dropdown.Toggle>

          <Dropdown.Menu variant="white">
            <Dropdown.Item href="#/action-1" active>XS</Dropdown.Item>
            <Dropdown.Item href="#/action-2">S</Dropdown.Item>
            <Dropdown.Item href="#/action-3">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
            <Dropdown.Item href="#/action-3">XXL</Dropdown.Item>
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