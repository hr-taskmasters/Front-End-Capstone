import React from 'react';

function Image(props) {

  return (
    <div className="product-image">
      <a href="#">
          {props.style.length ?
          <img className="p_pic" src={props.style[0].photos[0].url} />
          :
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          }
      </a>
    </div>
  );
};

export default Image;