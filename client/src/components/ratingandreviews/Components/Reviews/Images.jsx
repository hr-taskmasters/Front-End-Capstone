import React, { useState, useEffect} from 'react';
import { Card, Button, Modal, Image, Row, ModalBody } from 'react-bootstrap'



function Images ({ image }) {
    const[imageLarge, setImageLarge]= useState(false)

    return (
        <>
        <Image className="review-photos" thumbnail src={image.url} onClick={() => setImageLarge(true) }/>
        <Modal show={imageLarge} centered size="large" onHide={() => setImageLarge(false)}>
            <ModalBody>
                <Image src={image.url} thumbnail/>
            </ModalBody>
        </Modal>
        </>
    )
}

export default Images;
