import React, { useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../../../config/config.js'
import { Button, Card, Stack } from 'react-bootstrap';
import ReviewTile from './ReviewTile.jsx';
import SortDropdown from './SortDropdown.jsx';
import SubmitReview from './SubmitReview.jsx';


function Reviews (props) {
    const [reviewNum, setReviewNum] = useState(2);
    const slicedReviews = props.reviewList.slice(0, reviewNum);

    const loadMore = () => {
        setReviewNum(reviewNum + 2);
    }

    return (
        <>
        { props.reviewList ? 
        <>
        <Stack direction="horizontal" gap={2} className="reviews-dropdown-stack">
            <b>{props.reviewList.length}</b>
            <div>reviews, sorted by:</div>
            <SortDropdown sortBy={props.sortBy}/>
        </Stack>
        <Card className="reviews-list">
            <Card.Body>
                <Stack gap={3}>
                    {slicedReviews.map(review => (
                        <ReviewTile key={review.review_id} review={review}/>
                    ))}
                </Stack>
                <Stack direction="horizontal" gap={3}>
                <SubmitReview product={props.product} metaData={props.metaData}/>
                {props.reviewList.length > 2 && reviewNum <= props.reviewList.length &&
                <Button variant="outline-secondary" onClick={() => loadMore()}>More Reviews</Button>
                }
                </Stack>
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