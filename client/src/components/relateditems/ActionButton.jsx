import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from'react-bootstrap';

const ActionButton = (props) => {

  const icon = props.icon === 'star' ? <i className='far fa-star'></i> : <i className='far fa-times-circle'></i>;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div onClick={e => e.stopPropagation()}>
      {props.icon === 'star' ? <span className='actionButton' onClick={() => {
        handleShow();
      }}>{icon}</span> :
      <span className='actionButton' onClick={(e) => {
        props.removeOutfit(props.product)
      }}>{icon}</span> }
      <Modal show={show} dialogClassName="compareModal" onHide={(e) => {
        handleClose()
      }}>
        <Modal.Header>
          <Modal.Title>Comparing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col>{props.featuredProd.name}</Col>
              <Col></Col>
              <Col>{props.product.name}</Col>
            </Row>

          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => {
            handleClose()
          }}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ActionButton;

const styles = {
  cardImage: {
    maxWidth: '100%',
    height: '300px',
    overflow: 'hidden'
  },
  cardText: {
    whiteSpace: 'normal',
    textAlign: 'left'
  },
  noMargin: {
    marginBottom: 0
  }
}