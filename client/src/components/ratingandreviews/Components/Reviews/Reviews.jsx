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
    //     setReviewList(reviewList)
    // }, [props]);
    
    useEffect(() => {
        getReviews(id)
    }, [id]);

    useEffect(() => {
        setSortedList()
        // sortByHelpful()
        // sortByDate()
    }, [])
    useEffect(() => {
        sortByHelpful()
        // sortByDate()
    }, [reviewList])

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
        a.helpful - b.helpful
      })
      setSortedList(sortedByHelpful)
    }


    //sort by date
    const sortByDate = () => {
       /*
        make a copy of the review list using slice
        create a dates array
        iterate over the  reviewList
        for each date add a object with day month and year and id to array

        sort by year
        sort by month
        sort by day
        */

        // const sortedByDate= reviewList.sort((a,b) => {
        //     new Date(a.date) - new Date(b.date)
        // })
        // setSortedList(sortedByDate)

    }

    //sort by relevancy





    const slicedReviews = sortedList.slice(0, reviewNum);
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
        <SortDropdown sortByHelpful={sortByHelpful} sortByDate={sortByDate}/>
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

