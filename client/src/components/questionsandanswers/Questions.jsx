import React from 'react';
import IndividualQuestion from './IndividualQuestion.jsx';

const Questions = (props) => (
  <div className='q_questions_sessions'>
    {props.questions.map((question, index) =>
      <IndividualQuestion question={question} key={index}/>
    )}
    <br></br>
  </div>
);

export default Questions;
