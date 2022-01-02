import React, {useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js'
import {Card, Stack } from 'react-bootstrap';
import Ratings from './Components/Ratings/Ratings.jsx'
import Reviews from './Components/Reviews/Reviews.jsx';


function RatingAndReviews(props) {
  const [id, setId] = useState(42366); //43266
  const [reviewList, setReviewList] = useState([]); 
  const [metaData, setMetaData] = useState([]); 
  const [sort, setSort] = useState('relevant'); 
  const [filteredBy, setFilteredBy] = useState({
    five: false,
    four: false,
    three: false,
    two: false,
    one: false
  }); 
  const [filteredReviewList, setFilteredReviewList] = useState(reviewList); 
  
  useEffect(() => {
    if(props.product.id) {
      setId(props.product.id)
    }
  }, [props.product.id]);

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

  useEffect(() => {
    createFilteredList()
  }, [filteredBy])

  const resetFiltered = () =>{
    setFilteredBy({
      five: false,
      four: false,
      three: false,
      two: false,
      one: false
    }); 
  }
  const toggleFiltered = (option) => {
    if(filteredBy[option] === false){
      setFilteredBy({...filteredBy, [option]: true})
    } else if(filteredBy[option] === true){
      setFilteredBy({...filteredBy, [option]: false})
    }
  }

  const createFilteredList = () => {
      const filterNumbers = [];
      const reviewStorage =[];
      if(filteredBy.five) filterNumbers.push(5)
      if(filteredBy.four) filterNumbers.push(4)
      if(filteredBy.three) filterNumbers.push(3)
      if(filteredBy.two) filterNumbers.push(2)
      if(filteredBy.one) filterNumbers.push(1)
      reviewList.forEach(review => {
        if(filterNumbers.indexOf(review.rating) > -1) {
        reviewStorage.push(review)
      };
    });
    setFilteredReviewList(reviewStorage)
  }

  // useEffect(() => {
  //   createFilteredList()
  // }, [filteredBy])

  // const toggleListRender = () => {
  //   let toRender;
  //   filteredReviewList.length < 1 ?
  //   toRender = reviewList :
  //   toRender = filteredReviewList
  // }




  const getReviews = (id, sort) => {
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
      <Card>
        <Card.Title>
        <h2 className="rating-reviews-title">Ratings and Reviews</h2>
        </Card.Title>
        <Card.Body>
          <Stack direction="horizontal" gap={3}>
            <Card style={{ width: '26rem' }}> 
              <Ratings metaData={metaData} toggleFiltered={toggleFiltered} filteredBy={filteredBy} resetFiltered={resetFiltered}/>
            </Card>
            <Card style={{ width: '50rem' }}>
              <Reviews reviewList={reviewList} product={props.product} metaData={metaData}sortBy={sortBy}/>
            </Card>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RatingAndReviews;


/*  --FILTERING PLAN--
  
   //1. add a method that toggles the state of a filteredBy state object with booleans for each star rating

   //2. onclick of each button in review breakdown a boolean should be toggled in filteredBy

   //3. Create a filteredReviewList array state 

  4. for all true values in filteredBy, add those reviews to filteredReviewList
      
    for each key of filteredBy if the value is true
      add a num version of the string key to an filterNumbersArr
    for each review of reviewList
    if the review rating is present in filterNumbersArr
      add the whole review to filteredReviewList

  
  
  5. send filteredBy back down as a prop to ratingsBreakdown to be displayed

  6. create a button in RatingsBreakdown to clear all filters
    -this will reset the filteredBy obj's state' values to all  be false

  */