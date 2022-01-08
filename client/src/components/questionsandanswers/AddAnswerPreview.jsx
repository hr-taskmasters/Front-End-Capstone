import React from 'react';
import { Image } from 'react-bootstrap';

const AddAnswerPreview = (props) => (
  <div className='q_previews'>
    {props.photos.map((photo, i) =>
      <Image src={photo} key={i} height='100' width='100'/>
    )}
  </div>
);

export default AddAnswerPreview;