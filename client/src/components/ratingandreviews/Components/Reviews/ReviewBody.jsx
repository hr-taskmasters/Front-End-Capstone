import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ReviewBody (props) {
//submit up to 5 images no more

//default to first 250 chars
//show more button should only appear when there are mor than 250 chars

//only display recommended if recommended it true

    return (
      <Card>
        <Card.Body>
          <Card.Text>
            {props.review.body}
          </Card.Text>
          <Button variant="outline-secondary">Show More</Button>
        </Card.Body>
      </Card>
    )

}
export default ReviewBody;

{/* <Card.Header>Featured</Card.Header> */}
{/* <Card.Title>Special title treatment</Card.Title> */}


{/* <div>
<div>{props.review.body}</div>
<div>{props.review.recommended}</div>

<button>Show More</button>
</div> */}