import React, { useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../../../config/config.js'
import { Button, Card, Stack } from 'react-bootstrap';
import ReviewTile from './ReviewTile.jsx';
import SortDropdown from './SortDropdown.jsx';


function Reviews (props) {
    const [reviewNum, setReviewNum] = useState(2); //display 2 tiles initially and more when moreReviews is true
    const slicedReviews = props.reviewList.slice(0, reviewNum);

    const loadMore = () => {
        setReviewNum(reviewNum + 2);
    }

    return (
        <>
        { props.reviewList ? 
        <>
        <div>{props.reviewList.length} reviews, sorted by: 
        <SortDropdown sortBy={props.sortBy}/>
        </div>
        <Card className="reviews-list">
            <Card.Body>
                <Stack gap={3}>
                    {slicedReviews.map(review => (
                        <ReviewTile key={review.review_id} review={review}/>
                    ))}
                </Stack>
                <Button variant="outline-secondary">Submit Review</Button>{' '}
                {props.reviewList.length > 2 && reviewNum <= props.reviewList.length &&
                <Button variant="outline-secondary" onClick={() => loadMore()}>More Reviews</Button>
                }
            </Card.Body>
        </Card>
        </>
        :   <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }
      </>
    )
};
export default Reviews;