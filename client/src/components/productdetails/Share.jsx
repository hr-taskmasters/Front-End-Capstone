import React from 'react';

function Share() {
  return (
    <div>
      <span>Share: </span>
      <a className='p_share_icon' href='https://www.facebook.com/'>
        <i className='fab fa-facebook-square fa-lg'></i>
      </a>
      <a className='p_share_icon' href='https://twitter.com/home'>
        <i className='fab fa-twitter-square fa-lg'></i>
      </a>
      <a className='p_share_icon' href='https://www.pinterest.com/'>
        <i className='fab fa-pinterest-square fa-lg'></i>
      </a>
    </div>
  )
}

export default Share;