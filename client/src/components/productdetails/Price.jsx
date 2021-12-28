import React from 'react';

function Price(props) {
  return (
    <div className='p_price'>
      {props.style[props.styleNum] ?
        props.style[props.styleNum].sale_price ?
          // with discount
          <div>
          <span>{props.style[props.styleNum].original_price}</span>
          ${props.style[props.styleNum].sale_price}
          </div>
        :
          // without discount
          <div>
            ${props.style[props.styleNum] ? props.style[props.styleNum].original_price : null}
          </div>
      :
        null}
    </div>
  );
};

export default Price;