import React from 'react';

function Thumbnail(props) {
  return (

    <div className="row">
      {props.style.length ?
      props.style.map(itemStyle => {
        return (
          <div className="p_thumbnail col">
            <div className="col-sd-4">
              <img className="p_thumbnail_img" src={itemStyle.photos[0].thumbnail_url}></img>
              <div className="p_thumbnail_font">{itemStyle.name}</div>
            </div>
          </div>
        )
      })
      :
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      }
    </div>

  )
}

export default Thumbnail;