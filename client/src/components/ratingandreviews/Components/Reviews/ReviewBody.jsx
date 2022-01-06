import React, { useState, useEffect} from 'react';
import { Card, Button, Modal, Image, Row } from 'react-bootstrap'
import Images from './Images.jsx';

function ReviewBody (props) {
  const slicedBody = props.review.body.slice(0, 250);
  // const totalBodyLength = 
  const reviewPhotos = props.review.photos;
  const [body, setBody] = useState(slicedBody);
  const [bodyDifference, setBodyDifference] = useState(
    (props.review.body.length - body.length)
  )

  
  const showMore = () => {
    setBody(props.review.body)
    setBodyDifference(0)
  }


  return (
    <Card>
      <Card.Body>
        <Card.Text>
          {bodyDifference !== 0 ? <>{body}...</>
          : <>{body}</>}
        </Card.Text>
          {bodyDifference !== 0 &&
          <Button variant="outline-secondary"onClick={() => showMore()}>Show More</Button>
          }
          <Row>
            {reviewPhotos.length > 0 &&
            <div>
              {reviewPhotos.map((image, index) => 
                  <Images image={image} key={index}/>
              )}
            </div>
            }
          </Row>
          {props.review.response &&
          <div className="seller-response">
            <div>Response from seller:</div>
            <div>{props.review.response}</div>
          </div>}
      </Card.Body>
    </Card>
  )
}
export default ReviewBody;