import React, {useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import { Rating } from 'react-simple-star-rating';

function StarRating(props) {

  const [avgRating, setAvgRating] = useState(null);
  const [review, setReview] = useState(0);

  useEffect(() => {
    average(props.ratings);
  }, [props.ratings])

  const handleReviewClick = () => {
    let offset = 100;
    window.scrollTo({
        behavior: "smooth",
        top:
        document.getElementById("rating-reviews-main").getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset
    });
  }

  const average = (ratingObject) => {
    if (Object.keys(ratingObject).length !== 0) {
      var sum = 0;
      var count = 0;
      for (var key in ratingObject) {
        count += Number(ratingObject[key]);
        sum += Number(key) * Number(ratingObject[key]);
      }
      setAvgRating(parseFloat(sum/count).toFixed(1));
      setReview(count);
    }
  }

  return (
    <div>
      {review ?
        <div>
          <Rating
            readonly={true}
            ratingValue={avgRating * 20}
            initialValue={avgRating * 20}
            allowHalfIcon={true}
            size={28}
          />
          <span>{avgRating}</span>
          <span className='p_rating'><a onClick={handleReviewClick}>Read All {review} Ratings & Reviews</a></span>
        </div>
      :
        null
      }
    </div>
  );
}

export default StarRating;