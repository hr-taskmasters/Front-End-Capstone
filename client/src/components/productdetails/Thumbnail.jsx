import React from 'react';

function Thumbnail(props) {

  return (

    <div className='p_thumbnail_container'>
      {props.style.length ?
        props.style.map((itemStyle, index) => {
          return (
            <div key={index} className={index === props.styleNum ? 'p_thumbnail_selected p_thumbnail_child': 'p_thumbnail p_thumbnail_child'}>
              {index === props.styleNum ? <i className='fas fa-check-circle p_check'></i> : null}
              <img
                className='p_thumbnail_img'
                src={itemStyle.photos[0].thumbnail_url}
                onClick={() => props.handleClick(index)}>
              </img>
              <div className='p_thumbnail_font'>{itemStyle.name}</div>
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