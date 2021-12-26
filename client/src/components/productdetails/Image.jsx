import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Image(props) {

  return (
    <div>
      <div>
          {props.style.length ?
          <Carousel variant="dark">
            {props.style[props.styleNum].photos.map((img, index) => (
              <Carousel.Item key={index} interval={5000}>
                <img
                  className="d-block w-100 p_pic"
                  src={img.url}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          :
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          }
      </div>
    </div>
  );
};

export default Image;