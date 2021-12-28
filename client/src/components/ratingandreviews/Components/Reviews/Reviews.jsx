import React, { useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../../../config/config.js'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Button, Card, Stack } from 'react-bootstrap';
import ReviewTile from './ReviewTile.jsx';
import Sort from './Sort.jsx';


function Reviews (props) {

    // const [moreReviews, setMoreReviews] = useState(false); //display button if more than two reviews
    const [reviewList, setReviewList] = useState([]); //get initial reviewArray
    const [reviewNum, setReviewNum] = useState(2); //display 2 tiles initially and more when moreReviews is true
    
    
    const getReviews =() => { //currently gets one by id
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/?product_id=42366`, {
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

    useEffect(() => {
    getReviews()
    }, []);

    const slicedReviews = reviewList.slice(0, reviewNum);
    const loadMore = () => {
        setReviewNum(reviewNum + 2);
    }


    return (
        <Card>
        <Card.Header>{reviewList.length} reviews, sorted by: <Sort /></Card.Header>
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
              {reviewList.length > 2 &&
              <Button variant="outline-secondary" onClick={() => loadMore()}>More Reviews</Button>
              }
            </>
        </Card.Body>
      </Card>
    )
};
export default Reviews;


  //if tileNum > 2
        //show more review button
    // const getReviewNum = () => {
    //     if (props.reviews.count) {
    //         setTileNum(props.reviews.count);
    //     }
    // }



// <div>
//     <button>Sort Dropdown</button>
//     <button>Submit Review</button>
//     {props.reviews.results ? 
//     <div>
//         {props.reviews.results.map(tile => (
//             <Tile key={tile.review_id} review={tile}/>
//         ))}
//     </div>
//     : 
//     <div className="spinner-border" role="status">
//         <span className="visually-hidden">Loading...</span>
//     </div>
//     }
//     <button>More Reviews</button>
// </div>



// class List extends React.Component {
//   constructor(props){
//     super(props);
    
//     this.state = {
//       reviews: {}
//     }
    
//     }
//     componentDidMount(){
//         // this.props.getReviews()
        
//     }
    

//   render() {
    
//       return (
//         <div>
//             <button>Sort Dropdown</button>
//             <button>Submit Review</button>
//             <div>
//                 {
//                     // props.reviews.results.map(tile => (
//                 //     <Tile key={tile.review_id} review={tile}/>
//                 // ))
//                 }
//             </div>
//             <button>More Reviews</button>
//         </div>
//       )
//   }
// }