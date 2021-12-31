import React, {useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js'
import Ratings from './Components/Ratings/Ratings.jsx'
import Reviews from './Components/Reviews/Reviews.jsx';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';
import {Card, Stack } from 'react-bootstrap';



function RatingAndReviews(props) {
  const [id, setId] = useState(43266); //42366
  const [reviewList, setReviewList] = useState([]); //get initial reviewArray
  const [metaData, setMetaData] = useState([]); //get initial reviewArray
  const [sort, setSort] = useState('relevant'); //get initial reviewArray
  
  useEffect(() => {
    setId(props.product.id)
    // sortBy(sort)
    // setReviewList(reviewList)
  }, [props]);

  useEffect(() => {
    getReviews(id, sort)
    getMetaData(id)
  }, [id]);

  useEffect(() => {
    getReviews(id, sort)
  }, [sort]);

  const sortBy = (option) => {
    setSort(option)
  }


  const getReviews = (id, sort) => { //currently gets one by id
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/?sort=${sort}&product_id=${id}`, {
        headers: {
        'Authorization': `${API_KEY}`
        },
    })
    .then((response) => {
        setReviewList(response.data.results)
    })
    .catch(err => {
        console.log(err);
    })
  };
  
  const getMetaData = (id) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta/?product_id=${id}`, {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then(response => {
      setMetaData(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  };

  return (
    <div id="rating-reviews-main">
      <h4>Ratings and Reviews</h4>
      <Stack direction="horizontal" gap={3}>
        <Card style={{ width: '25rem' }}> 
          <Ratings metaData={metaData}/>
        </Card>
        <Card style={{ width: '50rem' }}>
          <Reviews reviewList={reviewList} sortBy={sortBy}/>
        </Card>
        </Stack>
    </div>
  )
}

export default RatingAndReviews;

