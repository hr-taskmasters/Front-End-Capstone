import React, { useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../../../config/config.js'
import { Button, Card, Stack } from 'react-bootstrap';
import ReviewTile from './ReviewTile.jsx';
import SortDropdown from './SortDropdown.jsx';


function Reviews (props) {
    const [id, setId] = useState(43266); //42366
    // const [moreReviews, setMoreReviews] = useState(false); //display button if more than two reviews
    const [reviewList, setReviewList] = useState([]); //get initial reviewArray
    const [reviewNum, setReviewNum] = useState(2); //display 2 tiles initially and more when moreReviews is true
    
    // useEffect(() => {
    //     setId(props.product.id)
    // }, [props]);
    
    useEffect(() => {
        getReviews(id)
    }, [id]);

    /*
    I am currently mapping over a sliced version of the review list and rendering that list. 
    Then loading 2 more reviews every time the "more reviews" button is clicked.

    If I sort the review list before slicing, then I should be able to use the same method.

    This means that my sort methods should probably live in this file.
    */


    const[sortedList, setSortedList] = useState(reviewList)// []??


    const sortByHelpful = () =>{
      const sortedByHelpful = reviewList.sort((a,b) => {
        // a.helpful - b.helpful
        b.helpful - a.helpful
      })
      setSortedList(sortedByHelpful)
    }



    const slicedReviews = reviewList.slice(0, reviewNum);
    const loadMore = () => {
        setReviewNum(reviewNum + 2);
    }

    
    const getReviews =(id) => { //currently gets one by id
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/?product_id=${id}`, {
            headers: {
            'Authorization': `${API_KEY}`
            },
        })
        .then((response) => {
            setReviewList(response.data.results)
        })
        .catch((err) => {
            console.log(err);
        })
        }

    return (
        <>
        <div>{reviewList.length} reviews, sorted by: 
        <SortDropdown sortByHelpful={sortByHelpful}/>
        </div>
        <Card className="reviews-list">
        <Card.Body>
        {reviewList ? 
            <Stack gap={3}>
                {slicedReviews.map(review => (
                    <ReviewTile key={review.review_id} review={review}/>
                ))}
            </Stack>
            : 
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            }
            <>
              <Button variant="outline-secondary">Submit Review</Button>{' '}
              {reviewList.length > 2 && reviewNum <= reviewList.length &&
              <Button variant="outline-secondary" onClick={() => loadMore()}>More Reviews</Button>
              }
            </>
        </Card.Body>
      </Card>
      </>
    )
};
export default Reviews;


//sorting ideas//

// const[sortedList, setSortedList] = useState([])

// const date = props.reviewList.date;

// const sortByDate = () =>{
//   const sortedByDate = props.reviewList.sort((a,b) => {
//     a.date - b.date
//   })

//   setSortedList(sortedByDate)
// }