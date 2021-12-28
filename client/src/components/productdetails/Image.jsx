import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Image(props) {

  const [selectImg, setSelectImg] = useState(null);
  const [click, setClick] = useState(false);

  const handleClick = (index) => {
    setSelectImg(index);
    setClick(true);
  };

  const handleCarousel = () => {
    setSelectImg(null);
    setClick(false);
  }

  useEffect(() => {
    handleCarousel();
  }, [])

  return (
    <div className='row'>
      <div className='col-md-2'>
        {props.style.length ?
          props.style[props.styleNum].photos.map((img, index) => (
          <img
            className={index === selectImg ? 'p_s_img_highlight' : 'p_s_img'}
            key={index}
            src={img.thumbnail_url}
            onClick={() => handleClick(index)}
          ></img>)) : null}
      </div>
      <div className='col-md-10'>
        {props.style.length ?
          <Carousel variant='dark' style={{backgroundColor: '#0000', height: '100%', width: '100%'}} onClick={handleCarousel}>
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
              ))
            }
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