import React, {useState} from 'react';
import { Image, Modal, closeButton } from 'react-bootstrap';

const AnswerPhotos = (props) => {
  const [isEnlarge, setLarge] = useState({
    showed: false,
    index: 0
  });
  console.log(props.photos);
  return (
    <div className='a_photos'>
      {props.photos.map((photo, i) =>
        <div key={i}>
          <Image className="q_ans_photos" src={photo.url} thumbnail onClick={()=> setLarge({showed: true, index: i})}/>
          <Modal
          show={isEnlarge.showed} centered size='large'
          onHide={() => setLarge({showed: false, index: i})}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Image src={props.photos[isEnlarge.index].url} thumbnail/>
          </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default AnswerPhotos;