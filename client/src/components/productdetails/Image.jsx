import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Image(props) {

  const [selectImg, setSelectImg] = useState(0);
  const [firstImg, setFirstImg] = useState(0);
  const [lastImg, setLastImg] = useState(7);

  useEffect(() => {
    changeStyle();
  }, [props.style[props.styleNum]])

  const changeStyle = () => {
    setSelectImg(0);
    setFirstImg(0);
    setLastImg(7);
  }

  const handleClick = (index) => {
    setSelectImg(index + firstImg);
  };

  const scrollUp = () => {
    if (firstImg > 0) {
      setFirstImg(firstImg - 1);
      setLastImg(lastImg - 1);
    }
  }

  const scrollDown = () => {
    if (lastImg < props.style[props.styleNum].photos.length) {
      setFirstImg(firstImg + 1);
      setLastImg(lastImg + 1);
    }
  }

  const nextImg = () => {
    if (selectImg < props.style[props.styleNum].photos.length - 1) {
      setSelectImg(selectImg + 1);
    }
    if (selectImg > lastImg - 2) {
      setSelectImg(selectImg + 1);
      scrollDown();
    }
  }

  const prevImg = () => {
    if (selectImg > 0) {
      setSelectImg(selectImg - 1);
    }
    if (selectImg < firstImg + 1) {
      setSelectImg(selectImg - 1);
      scrollUp();
    }
  }

  return (
    <div className='row justify-content-around'>
      <div className='col-md-2'>
        <button className='p_up' onClick={scrollUp}><i className='fas fa-chevron-up'></i></button>
        {props.style.length ?
          props.style[props.styleNum].photos.slice(firstImg, lastImg).map((img, index) => (
          <img
            className={index + firstImg === selectImg ? 'p_s_img_highlight' : 'p_s_img'}
            key={index}
            src={img.thumbnail_url}
            onClick={() => handleClick(index)}
          ></img>)) : null}
        <button className='p_down' onClick={scrollDown}><i className='fas fa-chevron-down'></i></button>
      </div>
      <div className='col-md-9'>
        {props.style.length ?
          <div>
            {selectImg ? <button className='p_left' onClick={prevImg}><i className='fas fa-chevron-left'></i></button> : null}
            {props.style[props.styleNum].photos[selectImg] ? <img className='p_pic' src={props.style[props.styleNum].photos[selectImg].url}></img> : <img className='p_pic' src={props.style[props.styleNum].photos[0].url}></img>}
            {selectImg === props.style[props.styleNum].photos.length - 1 ? null : <button className='p_right' onClick={nextImg}><i className='fas fa-chevron-right'></i></button>}

          </div>
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