import React, { useState, useEffect} from 'react';
import moment from 'moment';
import ReviewBody from './ReviewBody.jsx';
import { Card, Button, Stack } from 'react-bootstrap';
import API_KEY from '../../../../config/config.js';
import axios from 'axios';


function ReviewTile (props) {

  //make post requests to add review as helpful or to report review
  const [reviewHelpfulNum, setReviewHelpfulNum] = useState(() => props.review.helpfulness);
  const [helpfulSelected, setHelpfulSelected] = useState(false);
  const selectHelpful = () =>{
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/${props.review.review_id}/helpful`, 
    {helpfulness: reviewHelpfulNum + 1},
    { headers: { 'Authorization': `${API_KEY}` } })
    .then(res => {
      setReviewHelpfulNum(reviewHelpfulNum + 1);
      setHelpfulSelected(true);
    })
    .catch(err => console.log(err));
  }





  return (
    <>
      <Card>
        <Card.Header>
          <Stack direction="horizontal" gap={3}>
            <div>*star rating*</div>
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
          Helpful? 
          <div onClick={() => selectHelpful()}>Yes</div>
           ({reviewHelpfulNum}) *report*
        </Card.Body>
        
      </Card>
    </>
  )

}
export default ReviewTile;

