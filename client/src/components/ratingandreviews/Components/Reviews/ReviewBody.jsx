import React, { useState, useEffect} from 'react';
import { Card, Button, Modal, Image, Row } from 'react-bootstrap'
import Images from './Images.jsx';

function ReviewBody (props) {
  const slicedBody = props.review.body.slice(0, 250);
  const [body, setBody] = useState(slicedBody);

  const reviewPhotos = props.review.photos;
  
  const showMore = () => {
    setBody(props.review.body)
  }
  
  //default to first 250 chars
  //show more button should only appear when there are more than 250 chars

  return (
    <Card>
      <Card.Body>
        <Card.Text>
          {/* {props.review.body.length > 250 ? <>{body}...</>
          : <>{body}</>} */}
          {body}
        </Card.Text>
          {props.review.body.length > 250 &&
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
      </Card.Body>
    </Card>
  )
}
export default ReviewBody;



