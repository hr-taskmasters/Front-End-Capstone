import React from 'react';

function Thumbnail(props) {

  return (

    <div className='row'>
      {props.style.length ?
        props.style.map((itemStyle, index) => {
          return (
            <div key={index} className={index === props.styleNum ? 'p_thumbnail_selected col': 'p_thumbnail col'}>
              <div className='col-sd-3'>
                <img
                  className='p_thumbnail_img'
                  src={itemStyle.photos[0].thumbnail_url}
                  onClick={() => props.handleClick(index)}>
                </img>
                <div className='p_thumbnail_font'>{itemStyle.name}</div>
              </div>
            </div>
          )
        })
      :
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      }
    </div>
  )
}

export default Thumbnail;