import React from 'react';
import IndividualQuestion from './IndividualQuestion.jsx';

const Questions = (props) => (
  <div>
    {props.questions.map((question, index) =>
    <IndividualQuestion question={question} key={index} />
    )}
  </div>
)

export default Questions;
