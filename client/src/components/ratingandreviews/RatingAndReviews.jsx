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
  const [filteredBy, setFilteredBy] = useState({    //?[]
    five: false,
    four: false,
    three: false,
    two: false,
    one: false
  }); 
  const [filteredReviewList, setFilteredReviewList] = useState([]); 
  
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

  /*  --FILTERING PLAN--
  
   1. add a method that populates the state of a filterBy arr with booleans for each star rating

   2. onclick of each button in review breakdown a boolean should be added to the toFilterArr

  3. Create a filteredReviewList array state 

  4. for all true values in filteredBy, those reviews to filteredReviewList
      -then pass the filtered review list down as a prop
  
  5. send filteredBy back down as a prop to ratingsBreakdown to be displayed

  6. create a button in RatingsBreakdown to clear all filters
    -this will reset the filteredBy obj's state' values to all  be false

  */
  

  const toggleFiltered = (option) => {
    if(filteredBy[option] === false){
      setFilteredBy({...filteredBy, [option]: true})
    } else if(filteredBy[option] === true){
      setFilteredBy({...filteredBy, [option]: false})
    }
  }
   
  







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
              <Ratings metaData={metaData} toggleFiltered={toggleFiltered} filteredBy={filteredBy}/>
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

//    // var copy = {...filteredBy}
//     // console.log(copy)
//     //   if(copy[option] === false){
//     //     copy[option] === true;
//     //   } else if (copy[option] === true) {
//     //     copy[option] === false;
//     //   }
//     //   console.log(copy)
//     //   setFilteredBy(copy);

//       // let addition =filteredBy.concat([option])
//       // setFilteredBy(addition)
  


// //maybe just add the strigns to an array
//   //then use .filter to make a new array of their values
//   //if the length is odd, the value is true
//   //if the length is even the value is false

//   const determineBool = (arr, starStr) => {
//     var singleStarStrings = arr.filter(item => item === starStr)
//     var toggleBool = singleStarStrings.length % 2 === 0 ? false : true;
//     return toggleBool;
//   }