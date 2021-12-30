import React from 'react';

const ActionButton = (props) => {

  const icon = props.icon === 'star' ? <i className='far fa-star'></i> : <i className='far fa-xmark'></i>;

  return (
    <span className='actionButton'>{icon}</span>
  )
}

export default ActionButton;