import React from 'react';
import Button from 'react-bootstrap/Button';

function AddToCart(props) {
  return (
    <Button variant='dark' type='button' className='btn btn-default btn-sm p_flex_child_cart' onClick={props.handleClick}>
      <b> Add to Cart +</b>
    </Button>
  );
}

export default AddToCart;