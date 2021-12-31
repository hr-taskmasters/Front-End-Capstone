import React, { useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../../../config/config.js'
import { 
    Button,
    Card,
    Stack,
    Row,
    Form,
    Modal,
    FloatingLabel 
    } from 'react-bootstrap';


function SubmitReview (props) {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);



    return (
      <div>
        <Button variant="outline-secondary" onClick={handleShow}>Submit Review</Button>
        <Modal show={showModal} onHide={handleClose} backdrop="static" centered>
            <Modal.Header closeButton>
                <Modal.Title>My Review of "{props.product.name}"</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                <FloatingLabel controlId="floatingInput" label='Example: "Best purchase ever!"' className="mb-3">
                    <Form.Control 
                    type="text" 
                    placeholder='Example: "Best purchase ever!"' 
                    maxLength="60"
                    // onChange={}
                    />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label='“Why did you like the product or not?”'>
                    <Form.Control 
                    type="text" 
                    placeholder='“Why did you like the product or not?”' 
                    maxLength="1000"
                    // onChange={}
                    />
                </FloatingLabel>
                </>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="outline-primary">Submit</Button>
            </Modal.Footer>
        </Modal>
      </div>
    )
}

export default SubmitReview;