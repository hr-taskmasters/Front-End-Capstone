import React, { useState, useEffect} from 'react';
import moment from 'moment';
import ReviewBody from './ReviewBody.jsx';
import { Card, Button, Stack } from 'react-bootstrap'


function ReviewTile (props) {

  //make post requests to add review as helpful or to report review
 
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
          *Helpful? Yes* ({props.review.helpfulness}) *report*
        </Card.Body>
        
      </Card>
    </>
  )

}
export default ReviewTile;

