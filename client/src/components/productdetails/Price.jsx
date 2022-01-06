import React from 'react';

function Price(props) {
  const item = props.style[props.styleNum];
  return (
    <div className='p_price'>
      {item &&
        (item.sale_price ?
          <div>${item.sale_price}
          <span>{item.original_price}</span>
          </div>
        :
          <div>${item.original_price}</div>)}
    </div>
  );
};

export default Price;