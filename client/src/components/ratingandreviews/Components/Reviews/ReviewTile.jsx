import React, { useState, useEffect} from 'react';
import moment from 'moment';
import API_KEY from '../../../../config/config.js';
import axios from 'axios';
import { Card, Stack } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import ReviewBody from './ReviewBody.jsx';


function ReviewTile (props) {

  const [reviewHelpfulNum, setReviewHelpfulNum] = useState(() => props.review.helpfulness);
  const [helpfulSelection, setHelpfulSelection] = useState(false);
 
  
  const selectHelpful = () =>{
    if (!helpfulSelection) {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/${props.review.review_id}/helpful`, 
    {helpfulness: reviewHelpfulNum + 1},
    { headers: { 'Authorization': `${API_KEY}` } })
    .then(res => {
      setReviewHelpfulNum(reviewHelpfulNum + 1);
      setHelpfulSelection(true);
    })
    .catch(err => console.log(err));
    }
  }

  const selectUnHelpful = () =>{
    if (!helpfulSelection) {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/${props.review.review_id}/helpful`, 
    {helpfulness: reviewHelpfulNum - 1},
    { headers: { 'Authorization': `${API_KEY}` } })
    .then(res => {
      setReviewHelpfulNum(reviewHelpfulNum - 1);
      setHelpfulSelection(true);
    })
    .catch(err => console.log(err));
    }
  }

  //recommended
  //if the review is recommended display "this review is recommended"

  //make put request to report reviews...


  return (
    <>
      <Card>
        <Card.Header>
          <Stack direction="horizontal" gap={3}>
            <Rating readonly={true} 
            ratingValue={props.review.rating * 20} 
            initialValue={props.review.rating * 20} 
            allowHalfIcon={true}
            size={25}/>
            <div className="ms-auto">{props.review.reviewer_name}</div>
            <div>{moment(props.review.date).format('MMMM Do, YYYY')}</div>
          </Stack>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.review.title}</Card.Title>
          <Card.Text>
          {props.review.summary}
          </Card.Text>
          <ReviewBody review={props.review}/>
          <Stack direction="horizontal" gap={3}>
            <div>Helpful?</div>
            <div onClick={() => selectHelpful()}>Yes</div>
            <div onClick={() => selectUnHelpful()}>No</div>
            <div>({reviewHelpfulNum})</div>
            <div>*report*</div>
           </Stack>
        </Card.Body>
        
      </Card>
    </>
  )

}
export default ReviewTile;

