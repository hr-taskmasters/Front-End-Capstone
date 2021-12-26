import React from 'react';

function Thumbnail(props) {

  const handleClick = (e) => {
    console.log(e.target.value)
  }

  return (

    <div className="row">
      {props.style.length ?
      props.style.map((itemStyle, index) => {
        return (
          <div key={index} className="p_thumbnail col">
            <div className="col-sd-4">
              <img className="p_thumbnail_img"
                src={itemStyle.photos[0].thumbnail_url}
                value={index}
                onClick={handleClick}>
              </img>
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