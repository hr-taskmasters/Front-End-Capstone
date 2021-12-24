import React from 'react';

function Thumbnail(props) {
  return (

    <div>
      {props.style.length ?
      props.style.map(itemStyle => {
        return (
          <div className="p_thumbnail">
            <img className="p_thumbnail_img" src={itemStyle.photos[0].thumbnail_url}></img>
            <span>{itemStyle.name}</span>
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