import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from'react-bootstrap';

const ActionButton = (props) => {

  const icon = props.icon === 'star' ? <i className='far fa-star'></i> : <i className='far fa-times-circle'></i>;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [comparison, setCompare] = useState([]);

  useEffect(() => {
    if(props.featuredProd.features !== undefined && props.product.features !== undefined){
      getAndCompare();
    }
  }, [props.featuredProd])

  const getAndCompare = () => {
    // set features from props.featuredProd and props.product as keys in a combined object, then set each key to
    // an array that holds each product's value. [0] for featuredProd and [1] for cardProduct
    let featuredProd = props.featuredProd.features;
    let cardProd = props.product.features;
    let features = {};
    let rowList = [];

    featuredProd.forEach(featureObj => {
      if (!features[featureObj.feature]) {
        features[featureObj.feature] = [featureObj.value];
        if (featureObj.value === null) {
          features[featureObj.feature] = ['✔'];
        }
      }
    })
    cardProd.forEach(featureObj => {
      if(!features[featureObj.feature]){
        features[featureObj.feature] = [];
        features[featureObj.feature][1] = featureObj.value;
        if(featureObj.value === null) {
          features[featureObj.feature] = [];
          features[featureObj.feature][1] = '✔';
        }
      } else if (featureObj.value === null){
        features[featureObj.feature][1] = '✔';
      } else {
        features[featureObj.feature][1] = featureObj.value
      }
    })
    for(var feature in features) {
      rowList.push(<Row key={feature}>
        <Col><i>{features[feature][0]}</i></Col>
        <Col>{feature}</Col>
        <Col><i>{features[feature][1]}</i></Col>
      </Row>)
    }
    setCompare(rowList);
  }

  return (
    <div onClick={e => e.stopPropagation()}>
      {props.icon === 'star' ? <span className='actionButton' onClick={() => {
        handleShow();
      }}>{icon}</span> :
      <span className='actionButton' onClick={(e) => {
        props.removeOutfit(props.product)
      }}>{icon}</span> }
      <Modal show={show} dialogClassName="compareModal" scrollable={true} animation={false} onHide={(e) => {
        handleClose()
      }}>
        <Modal.Header>
          <Modal.Title>Product Comparison</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col><b>{props.featuredProd.name}</b></Col>
              <Col><b>FEATURE</b></Col>
              <Col><b>{props.product.name}</b></Col>
            </Row>
            {comparison}
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