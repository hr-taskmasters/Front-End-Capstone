import React from 'react';
import IndividualQuestion from './IndividualQuestion.jsx';

// const Questions = (props) => (
//   <ListGroup variant="flush">
//     {props.questions.map((question, index) =>
//     <IndividualQuestion question={question} key={index}/>
//     )}
//   </ListGroup>
// )
const Questions = (props) => (
  <div className='q_questions_sessions'>
    {props.questions.map((question, index) =>
    <IndividualQuestion question={question} key={index}/>
    )}
    <br></br>
  </div>
)

export default Questions;
