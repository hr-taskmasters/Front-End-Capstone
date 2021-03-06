import React, {useState, useEffect} from 'react';
import Zoom from './Zoom.jsx';

function Image(props) {

  const [selectImg, setSelectImg] = useState(0);
  const [firstImg, setFirstImg] = useState(0);
  const [lastImg, setLastImg] = useState(7);
  const [click, setClick] = useState(false);

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

  const handleIconClick = (index) => {
    setSelectImg(index);
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

  const zoomIn = () => {
    setClick(!click);
  }

  const imgUrl = (selectImg) => {
    if (props.style[props.styleNum].photos[selectImg].url) {
      return props.style[props.styleNum].photos[selectImg].url;
    } else {
      return `images/placeholder-image.png`;
    }
  }

  return (
    <div className='row justify-content-around'>
      <div className='col-md-2'>
        <button
          className='p_up'
          onClick={scrollUp}>
          <i className='fas fa-chevron-up'></i>
        </button>
        {props.style.length ?
          props.style[props.styleNum].photos.slice(firstImg, lastImg).map((img, index) => (
          <img
            className={index + firstImg === selectImg ? 'p_s_img_highlight' : 'p_s_img'}
            key={index}
            alt={img.name}
            src={img.thumbnail_url ? img.thumbnail_url : `images/placeholder-image.png`}
            onClick={() => handleClick(index)}
          ></img>)) : null}
        <button
          className='p_down'
          onClick={scrollDown}>
          <i className='fas fa-chevron-down'></i>
        </button>
      </div>
      <div className='col-md-9'>
        {props.style.length ?
          <div>
            {selectImg ?
              <button
                className='p_left'
                onClick={prevImg}>
                <i className='fas fa-chevron-left'></i>
              </button>
            :
              <button className='p_button'></button>
            }
            {props.style[props.styleNum].photos[selectImg] ?
              <img
                className='p_pic'
                alt={props.style[props.styleNum].name}
                src={imgUrl(selectImg)}
                onClick={props.expandMode}>
              </img>
            :
              <img
                className='p_pic'
                alt={props.style[props.styleNum].name}
                src={imgUrl(0)}
                onClick={props.expandMode}>
              </img>
            }
            {selectImg === props.style[props.styleNum].photos.length - 1 ?
              null
            :
              <button
                className='p_right'
                onClick={nextImg}>
                <i className='fas fa-chevron-right'></i>
              </button>
            }
          </div>
        :
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        }
      </div>
      {props.expand && (
        <div className='p_expand row'>
          {!click &&
            <div className='col-sm-1 p_icon_container'>
              {props.style[props.styleNum].photos.map((img, index) => (
                <div key={index}>
                  <button
                    className='p_thum_icon'
                    onClick={() => handleIconClick(index)}
                  >
                    <i className={index === selectImg ? 'fas fa-user-circle p_selected_icon' : 'fas fa-user-circle'}></i>
                  </button>
                </div>
                ))
              }
            </div>
          }
          <div className='p_expand_item col-md-10'>
            {selectImg && !click ?
              <button
                className='p_left'
                onClick={prevImg}>
                <i className='fas fa-chevron-left'></i>
              </button>
            :
              null
            }
            {click ?
              <div className='p_zoom'>
                <Zoom
                  img={imgUrl(selectImg)}
                  zoomScale={2.5}
                  height={650}
                  width={900}
                  transitionTime={0.5}
                  onClick={zoomIn}
                />
              </div>
            :
              <img
                className='p_pic_expanded'
                src={imgUrl(selectImg)}
                onClick={zoomIn}
              ></img>
            }
            {!click &&
            <button
              className='p_exit_expand'
              onClick={props.exitExpandMode}>
              <i className='fas fa-times fa-lg'></i>
            </button>
            }
            {selectImg !== props.style[props.styleNum].photos.length - 1 && !click ?
              <button
                className='p_right'
                onClick={nextImg}>
                <i className='fas fa-chevron-right'></i>
              </button>
            :
              null
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;