import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Image(props) {

  const [selectImg, setSelectImg] = useState(0);
  const [click, setClick] = useState(false);

  const handleClick = (index) => {
    setSelectImg(index);
    setClick(true);
  };

  return (
    <div className='row'>
      <div className='col-md-2'>
        {props.style.length ?
          props.style[props.styleNum].photos.map((img, index) => (
          <img
            className='p_s_img'
            key={index}
            src={img.thumbnail_url}
            onClick={() => handleClick(index)}
          ></img>)) : null}
      </div>
      <div className='col-md-10'>
        {props.style.length ?
        <Carousel variant='dark'>
          {click ?
          <img className='w-100 p_pic' src={props.style[props.styleNum].photos[selectImg].url}>
          </img>
          :
          props.style[props.styleNum].photos.map((img, index) => (
            <Carousel.Item key={index} interval={5000}>
              <img
                className='d-block w-100 p_pic'
                src={img.url}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        :
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
        }
      </div>
    </div>
  );
};

export default Image;