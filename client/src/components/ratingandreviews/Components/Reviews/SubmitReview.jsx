import React, { useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../../../config/config.js'
import { 
    Button, Stack, Row, Form, Modal, 
    Accordion, FloatingLabel, ButtonGroup, ToggleButton, ToggleButtonGroup
} from 'react-bootstrap';


function SubmitReview (props) {
    const [showModal, setShowModal] = useState(false);
    const [recommended, setRecommended] = useState('');
    
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    
    const recommendedRadios =[
        { name: 'Yes', value: true},
        { name: 'No', value: false}
    ]



    return (
      <div>
        <Button variant="outline-secondary" onClick={handleShow}>Submit Review</Button>
        <Modal show={showModal} onHide={handleClose} backdrop="static" dialogClassName="modal-90w">
            <Modal.Header closeButton>
                <Modal.Title>My Review of "{props.product.name}"</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack gap={3}>



                <b>Do you recommend this product?*</b>
                <ButtonGroup className="mb-2">
                  {recommendedRadios.map((radio, i) => (
                    <ToggleButton
                        key={i}
                        id={`radio-${i}`}
                        type="radio"
                        variant={i % 2 === 0  ? 'outline-primary' : 'outline-secondary'}
                        name="radio"
                        value={radio.value}
                        checked={recommended === radio.value}
                        onChange={(e) => setRecommended(e.currentTarget.value)}
                        >
                        {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>













                <b>Summary</b>
                <FloatingLabel controlId="floatingInput" label='Example: "Best purchase ever!"' className="mb-3">
                    <Form.Control 
                    type="text" 
                    placeholder='Example: "Best purchase ever!"' 
                    maxLength="60"
                    // onChange={}
                    />
                </FloatingLabel>

                <b>Review body*</b>
                <FloatingLabel controlId="floatingPassword" label='“Why did you like the product or not?”' className="mb-3">
                    <Form.Control 
                    className="submit-body"
                    as="textarea"
                    type="text" 
                    placeholder='“Why did you like the product or not?”' 
                    minLength="50"
                    maxLength="1000"
                    // onChange={}
                    />
                </FloatingLabel>

                <b>Add Images*</b>
                <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Upload Images</Accordion.Header>
                    <Accordion.Body>
                        <Stack gap={2}>
                            <div>[Image Previews] *Limit 5*</div>
                    {/* <Form.Label>Default file input example</Form.Label> */}
                    <Form.Control type="file" />
                    <Button variant="outline-secondary">Add Image</Button>
                    </Stack>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>


                <b>Nickname*</b>
                <FloatingLabel controlId="floatingInput" label='Example: "jackson11!”' className="mb-3">
                    <Form.Control 
                    type="text" 
                    placeholder='Example: "jackson11!”' 
                    maxLength="60"
                    // onChange={}
                    />
                    <Form.Text muted>
                    For privacy reasons, do not use your full name or email address.
                    </Form.Text>
                </FloatingLabel>

                <b>Email*</b>
                <FloatingLabel controlId="floatingInput" label='Example: "jackson11@email.com”' className="mb-3">
                    <Form.Control 
                    type="email" 
                    placeholder='Example: "jackson11@email.com”' 
                    maxLength="60"
                    // onChange={}
                    />
                    <Form.Text muted>
                    For authentication reasons, you will not be emailed.
                    </Form.Text>
                </FloatingLabel>
            
            </Stack>
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






// const [showModalImg, setShowModalImg] = useState(false);
// const handleShowImg = () => setShowModalImg(true);
// const handleCloseImg = () => setShowModalImg(false);

{/* <Button variant="outline-secondary" onClick={handleShowImg}>Add Images</Button>


<Modal show={showModalImg} onHide={handleCloseImg} backdrop="static" dialogClassName="modal-90w">
    <Modal.Header closeButton>
        <Modal.Title>My Review of "{props.product.name}"</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    I will not close if you click outside me. Don't even try to press
    escape key.
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseImg}>
        Close
    </Button>
    <Button variant="primary">Understood</Button>
    </Modal.Footer>
</Modal> */}