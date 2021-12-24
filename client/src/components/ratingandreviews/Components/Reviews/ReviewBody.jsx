import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ReviewBody (props) {
//submit up to 5 images no more

//default to first 250 chars
//show more button should only appear when there are mor than 250 chars
const [chars, setChars] = useState(0);


//only display recommended if recommended it true
    return (
      <Card>
        <Card.Body>
          <Card.Text>
            {/* {chars > 250 ?
            trimmedReview
        :  */}
        {props.review.body}
          </Card.Text>
          { chars > 250 ?
            <Button variant="outline-secondary">Show More</Button>
          : <></> }
        </Card.Body>
      </Card>
    )


}
export default ReviewBody;

// let trimmedReview = props.reviews.body.slice(0, 250);
// if(props.reviews.body)console.log(props.reviews.body)
// const charsNum =() => {
//   let body = props.review.body
//   setChars(body.length)
// }
// useEffect(() => {
//   setChars();
// }, [])