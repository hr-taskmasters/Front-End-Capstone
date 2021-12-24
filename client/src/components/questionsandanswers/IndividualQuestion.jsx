import React, {useState, useEffect} from 'react';

const IndividualQuestion = (props) => {
  const [q_helpful_count, setQCount] = useState(() => {return props.question.question_helpfulness})
  const handleHelpfulClick = () => {
    setQCount(q_helpful_count + 1)
  }
  return (
  <div className="Q-question-container">
    <div className="Q-question-body">
      <div className="Q-question">Q: {props.question.question_body}</div>
      <span className="Q-question-helpful">
        <label>Helpful? </label>
        <u onClick={handleHelpfulClick}>Yes</u>
        <span>({q_helpful_count})</span>
      </span>
      <span> | </span>
      <u>Add Answer</u>
    </div>
  </div>
  )

}

export default IndividualQuestion;