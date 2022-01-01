import React, { useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../../../config/config.js';
import Radios from '../../radioData/radioData.js';
import { Rating } from 'react-simple-star-rating';

import { Button, Stack, Form, Modal, Accordion, FloatingLabel, ButtonGroup, ToggleButton } from 'react-bootstrap';


function SubmitReview (props) {
    const [showModal, setShowModal] = useState(false);
    const [appChars, setAppChars] = useState([]);
    const [factors, setFactors] = useState(null);
    //star rating
    const [stars, setStars] = useState(0);
    //radio buttons state
    const [recommended, setRecommended] = useState(null);
    const [size, setSize] = useState(null);
    const [width, setWidth] = useState(null);
    const [comfort, setComfort] = useState(null);
    const [quality, setQuality] = useState(null);
    const [length, setLength] = useState(null);
    const [fit, setFit] = useState(null);
    //text inputs state
    const [summary, setSummary] = useState('');
    const [body, setBody] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    
    
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    
    const findAppChars = () => {
        if(props.metaData.characteristics !== undefined){
        const charArr = Object.keys(props.metaData.characteristics);
            setAppChars(charArr);
        }
    }
    useEffect(()=> {
        findAppChars()
    }, [props.metaData.characteristics]);

    const handleRating = (rate) => {
        setStars(rate);
    }

    // useEffect(() => {
    //     createAndParseFactorsObj()
    // },[])

    // const createAndParseFactorsObj = () => {
    //     if(props.metaData.characteristics !== undefined){
    //         const sizeKey = props.metaData.characteristics.Size.id;
    //         const widthKey = props.metaData.characteristics.Width.id;
    //         const comfortKey = props.metaData.characteristics.Comfort.id;
    //         const qualityKey = props.metaData.characteristics.Quality.id;
    //         const lengthKey = props.metaData.characteristics.Length.id;
    //         const fitKey = props.metaData.characteristics.Fit.id;
    //         const factorsObj = {
    //             [sizeKey]: size,
    //             [widthKey]: width,
    //             [comfortKey]: comfort,
    //             [qualityKey]: quality,
    //             [lengthKey]: length,
    //             [fitKey]: fit
    //         }
    //         for(var key in factorsObj){
    //             if(factorsObj[key] === null){
    //                 delete factorsObj[key]
    //             }
    //         }
    //         setFactors(factorsObj)
    //     }
    // }

    const postReview = (e) => {
        e.preventDefault();
        const factors = {
            142034: Number(comfort),
            142032: Number(fit),
            142033: Number(length),
            142035: Number(quality)
        }
        const bodyParams = {
            product_id: props.product.id,
            rating: (stars / 20),
            summary: summary,
            body: body,
            recommend: Boolean(recommended),
            name: nickname,
            email: email,
            photos: ['',''],
            characteristics: factors
        }
        // console.log(factors)
        if ( recommended 
            && body.length > 50 
            && nickname.length > 1 
            && email.length > 1 
            && email.includes('@') 
            && factors) {
        axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/?product_id=${props.product.id}`, bodyParams,
        { headers: { 'Authorization': `${API_KEY}` } })
        .then(res => {
            alert('Your review was submitted.')
            handleClose();
        })
        .catch(err => console.log(err, bodyParams))
        } else {
            alert('All fields marked with a * must be complete.')
        };
    };

    
    return (
      <div>
        <Button variant="outline-secondary" onClick={handleShow}>Submit Review</Button>
        <Modal show={showModal} onHide={handleClose} backdrop="static" size="lg" dialogClassName="modal-90w">
            <Modal.Header closeButton>
                <Modal.Title>My Review of "{props.product.name}"</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack gap={3}>
                <b>Rating*</b>
                <Rating onClick={handleRating} 
                    ratingValue={stars} 
                    showTooltip={true} 
                    tooltipArray={['Poor', 'Fair', 'Average', 'Good', 'Great']}
                />
                
                    {/* RADIOS */}
                <b>Do you recommend this product?*</b>
                <ButtonGroup className="mb-2">
                  {Radios.recommended.map((radio, i) => (
                    <ToggleButton
                        size="sm"
                        key={i}
                        // active={true}
                        id={`radioRec-${i}`}
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
                {appChars.indexOf('Size') > -1 ?
                <>
                <b>Size*</b>
                <ButtonGroup className="mb-2">
                  {Radios.size.map((radio, i) => (
                    <ToggleButton
                        key={i}
                        id={`radioSize-${i}`}
                        type="radio"
                        variant="outline-primary"
                        name="radio"
                        value={radio.value}
                        checked={size === radio.value}
                        onChange={(e) => setSize(e.currentTarget.value)}
                        >
                        {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
                </>
                : <></>}
                {appChars.indexOf('Width') > -1 ?
                <>
                <b>Width*</b>
                <ButtonGroup className="mb-2">
                  {Radios.width.map((radio, i) => (
                    <ToggleButton
                        key={i}
                        id={`radioWidth-${i}`}
                        type="radio"
                        variant="outline-primary"
                        name="radio"
                        value={radio.value}
                        checked={width === radio.value}
                        onChange={(e) => setWidth(e.currentTarget.value)}
                        >
                        {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
                </>
                : <></>}
                {appChars.indexOf('Comfort') > -1 ?
                <>
                <b>Comfort*</b>
                <ButtonGroup className="mb-2">
                  {Radios.comfort.map((radio, i) => (
                    <ToggleButton
                        key={i}
                        id={`radioComfort-${i}`}
                        type="radio"
                        variant="outline-primary"
                        name="radio"
                        value={radio.value}
                        checked={comfort === radio.value}
                        onChange={(e) => setComfort(e.currentTarget.value)}
                        >
                        {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
                </>
                : <></>}
                {appChars.indexOf('Quality') > -1 ?
                <>
                <b>Quality*</b>
                <ButtonGroup className="mb-2">
                  {Radios.width.map((radio, i) => (
                    <ToggleButton
                        key={i}
                        id={`radioQuality-${i}`}
                        type="radio"
                        variant="outline-primary"
                        name="radio"
                        value={radio.value}
                        checked={quality === radio.value}
                        onChange={(e) => setQuality(e.currentTarget.value)}
                        >
                        {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
                </>
                : <></>}
                {appChars.indexOf('Quality') > -1 ?
                <>
                <b>Length*</b>
                <ButtonGroup className="mb-2">
                  {Radios.width.map((radio, i) => (
                    <ToggleButton
                        key={i}
                        id={`radioLength-${i}`}
                        type="radio"
                        variant="outline-primary"
                        name="radio"
                        value={radio.value}
                        checked={length === radio.value}
                        onChange={(e) => setLength(e.currentTarget.value)}
                        >
                        {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
                </>
                : <></>}
                {appChars.indexOf('Quality') > -1 ?
                <>
                <b>Fit*</b>
                <ButtonGroup className="mb-2">
                  {Radios.width.map((radio, i) => (
                    <ToggleButton
                        key={i}
                        id={`radioFit-${i}`}
                        type="radio"
                        variant="outline-primary"
                        name="radioFit"
                        value={radio.value}
                        checked={fit === radio.value}
                        onChange={(e) => setFit(e.currentTarget.value)}
                        >
                        {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
                </>
                : <></>}
                <b>Summary</b>
                <FloatingLabel controlId="floatingInput" label='Example: "Best purchase ever!"' className="mb-3">
                    <Form.Control 
                    type="text" 
                    as="textarea"
                    placeholder='Example: "Best purchase ever!"' 
                    maxLength="60"
                    onChange={(e) => setSummary(e.target.value)}
                    />
                </FloatingLabel>
                <b>Review body*</b>
                <FloatingLabel controlId="floatingPassword" label='“Why did you like the product or not?”' className="mb-3">
                    <Form.Control 
                    as="textarea"
                    style={{ height: '260px' }}
                    type="text" 
                    placeholder='“Why did you like the product or not?”' 
                    minLength="50"
                    maxLength="1000"
                    onChange={(e) => setBody(e.target.value)}
                    />
                </FloatingLabel>
                <b>Add Images</b>
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
                    onChange={(e) => setNickname(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text muted>
                    For authentication reasons, you will not be emailed.
                    </Form.Text>
                </FloatingLabel>
            </Stack>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="outline-primary" type="submit" onClick={postReview}>Submit</Button>
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



//radio arrays
// const recommendedRadios =[
//     { name: 'Yes', value: true},
//     { name: 'No', value: false}
// ];

// const sizeRadios = [
//     { name: 'A size too small', value: 1 },
//     { name: '1/2 a size too small', value: 2 },
//     { name: 'Perfect', value: 3 },
//     { name: '1/2 a size too big', value: 4 },
//     { name: 'A size too big', value: 5 }
// ];

// const widthRadios = [
//     { name: 'Too narrow', value: 1 },
//     { name: 'Slightly narrow', value: 2 },
//     { name: 'Perfect', value: 3 },
//     { name: 'Slightly wide', value: 4 },
//     { name: 'Too wide', value: 5 }
// ];



