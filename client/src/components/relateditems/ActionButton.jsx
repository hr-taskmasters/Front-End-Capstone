import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from'react-bootstrap';

const ActionButton = (props) => {

  const icon = props.icon === 'star' ? <i className='far fa-star'></i> : <i className='far fa-xmark'></i>;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <span className='actionButton' onClick={(e) => {
        handleShow();
        e.stopPropagation();
      }}>{icon}</span>
      <Modal show={show} dialogClassName="compareModal" onHide={(e) => {
        handleClose()
        e.stopPropagation();
      }}>
        <Modal.Header closeButton>
          <Modal.Title>Comparing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col>Product Placeholder 1</Col>
              <Col></Col>
              <Col>Product Placeholder 2</Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => {
            handleClose()
            e.stopPropagation();
          }}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
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