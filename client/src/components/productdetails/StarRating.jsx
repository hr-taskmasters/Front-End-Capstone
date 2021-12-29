import React, {useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav'

function StarRating(props) {

  const [avgRating, setAvgRating] = useState(null);
  const [review, setReview] = useState(0);

  useEffect(() => {
    average(props.ratings);
  }, [props.ratings])

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

  const starNum = () => {
    var avg = avgRating;
    if (avg) {
      if (avg === 5) {
        return (
        <span>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </span>
        );
      } else if (avg >= 4.5) {
        return (
          <span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </span>
        )
      } else if (avg >= 4) {
        return (
          <span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
      } else if (avg >= 3.5) {
        return (
          <span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
          </span>
        )
      } else if (avg >= 3) {
        return (
          <span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
      } else if (avg >= 2.5) {
        return (
          <span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
      } else if (avg >= 2) {
        return (
          <span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
      } else if (avg >= 1.5) {
        return (
          <span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
      } else if (avg >= 1) {
        return (
          <span>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
      } else if (avg >= 0.5) {
        return (
          <span>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
      } else {
        return (
          <span>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        )
      }
    }
  }

  return (
    <div>
      {review ?
        <div>
          {starNum()}
          <span>{avgRating}</span>
          <span className='p_rating'><a href='#'>Read All {review} Reviews</a></span>
        </div>
      :
        null
      }
    </div>
  );
}

export default StarRating;