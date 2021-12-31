import React, {useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js'
import Ratings from './Components/Ratings/Ratings.jsx'
import Reviews from './Components/Reviews/Reviews.jsx';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';
import {Card, Stack } from 'react-bootstrap';



function RatingAndReviews(props) {

  return (
    <div id="rating-reviews-main">
      <h4>Ratings and Reviews</h4>
      {/* <CardGroup> */}
      <Stack direction="horizontal" gap={3}>
        <Card style={{ width: '25rem' }}>
          <Ratings metaData={props.metaData}/>
        </Card>
        <Card style={{ width: '50rem' }}>
          <Reviews product={props.product}/>
        </Card>
        </Stack>
      {/* </CardGroup> */}
    </div>
  )
}

export default RatingAndReviews;

