import React, { useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../../../config/config.js'
import { Button, Card, Stack } from 'react-bootstrap';
import ReviewTile from './ReviewTile.jsx';
import SortDropdown from './SortDropdown.jsx';
import SubmitReview from './SubmitReview.jsx';
import Search from './Search.jsx';


function Reviews (props) {
    const [reviewNum, setReviewNum] = useState(2);
    const slicedReviews = props.reviewList.slice(0, reviewNum);
    const [search, setSearch] = useState('');

    const loadMore = () => {
        setReviewNum(reviewNum + 2);
    }

//     const [searchTerm, setSearchTerm] = useState('');
//   const filterQuestions = (questionlist, inputTerm) => {
//     if(!inputTerm || inputTerm.length < 3) {
//       return questionlist;
//     };
//     return questionlist.filter((question) => {
//       const body = question.question_body.toLowerCase();
//       return body.includes(inputTerm.toLowerCase());
//     });
//   };

    return (
        <>
        { props.reviewList ? 
        <>
        <Card>
        <Card.Title>
            <Stack direction="horizontal" gap={2} className="reviews-dropdown-stack">
                <h3>{props.reviewList.length}</h3>
                <div>reviews, sorted by:</div>
                <SortDropdown sortBy={props.sortBy}/>
                <div className="ms-auto" >
                    <SubmitReview product={props.product} metaData={props.metaData}/>
                </div>
            </Stack>
            <div className="search-bar">
                <Search search={search} setSearch={setSearch}/>
            </div>
        </Card.Title>
        </Card>
        <Card className="reviews-list">
        <Card.Body>
            <Stack gap={3}>
                {slicedReviews.map(review => (
                    <ReviewTile key={review.review_id} review={review}/>
                ))}
                {props.reviewList.length > 2 && reviewNum <= props.reviewList.length &&
                <Button variant="outline-secondary" onClick={() => loadMore()}>Show more reviews</Button>
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