import React, { useState, useEffect} from 'react';
import moment from 'moment';

const IndividualAnswer = (props) => {
  const [a_helpful_count, setACount] = useState(() => {return props.answer.helpfulness})
  const handleHelpfulClick = () => {
    setACount(a_helpful_count + 1)
  }
  const photos = props.answer.photos;
  return (
    <div className="Q-answer-container">
      This is a single Answer
      <div className="Q-answer-body">
      <div className="Q-answer">A: {props.answer.body}</div>
      <label className="Q-answererAndDate">
        by {props.answer.answerer_name}, {moment(props.answer.date).format('MMMM Do YYYY')}
      </label>
      <span className="Q-answer-helpful">
        <label> Helpful? </label>
        <u onClick={handleHelpfulClick}>Yes</u>
        <span>({a_helpful_count})</span>
      </span>
      <span> | </span>
      <u>Report</u>
    </div>
    {photos.length > 0 &&
      <div>
        <label>Yes, as you can see in these photos.</label>
        <div>
          {photos.map((photo) =>
          <img src={photo.url}></img>
          )}
        </div>
      </div>
    }
    <br></br>
    </div>
  )
}

export default IndividualAnswer;