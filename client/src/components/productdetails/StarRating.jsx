import React, {useState} from 'react';

function StarRating(props) {

  const average = (ratingObject) => {
    if (Object.keys(ratingObject).length !== 0) {
      var sum = 0;
      var count = 0;
      for (var key in ratingObject) {
        count += Number(ratingObject[key]);
        sum += Number(key) * Number(ratingObject[key]);
      }
      return sum/count;
    }
  }

  const starNum = () => {
    var avg = average(props.ratings);
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
      {starNum()}
      <span>{average(props.ratings)}</span>
      <span className='p_rating'>Read All Reviews</span>
    </div>
  );
}

export default StarRating;