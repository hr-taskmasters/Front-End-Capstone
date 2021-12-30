import React, {useState} from 'react';
import axios from 'axios';
import { Button, Modal, closeButton, Form, Row, Col, FloatingLabel} from 'react-bootstrap';

const AddQuestion = () => {
  const [showModal, setModal] = useState(false);
  const handleShow = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <div id='add_question_button'>
      <label className='mb-3'>Don't see the question you're looking for?</label>{' '}
      <Button  variant="outline-secondary" onClick={handleShow}>ADD A QUESTION +</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Ask your question</h3>
            <h6>About the [Product Name Here]</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridQuestion'>
                <Form.Label>Post your question here</Form.Label>
                <Form.Control
                  as='textarea'
                  placeholder='Please enter a question.'
                  style={{ height: '100px'}}
                  maxlength='1000'
                  ></Form.Control>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridNickname'>
                <Form.Label>What is your nickname?</Form.Label>
                <FloatingLabel controlId='floatingnickname' label='Example: jackson11!'>
                  <Form.Control
                    type='nickname'
                    placeholder='Example: jackson11!'
                    maxlength='60'
                  ></Form.Control>
                </FloatingLabel>
                <Form.Text className='text-muted'>
                  For privacy reasons, do not use your full name or email address
                </Form.Text>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId='formGridNickname'>
                <Form.Label>What is your email?</Form.Label>
                <FloatingLabel controlId='floatingemail' label='Why did you like the product or not?'>
                  <Form.Control
                    type='email'
                    placeholder='Why did you like the product or not?'
                    maxlength='60'
                  ></Form.Control>
                </FloatingLabel>
                <Form.Text className='text-muted'>
                  For authentication reasons, you will not be emailed
                </Form.Text>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => handleClose()}>Cancel</Button>
          <Button>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddQuestion;