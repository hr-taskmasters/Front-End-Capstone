import React from 'react';

function Price(props) {
  return (
    <div className='p_price'>
      <span>{props.info.sale_price ? $props.info.sale_price : null}</span>
      ${props.style[props.styleNum] ? props.style[props.styleNum].original_price : null}
    </div>
  );
};

export default Price;