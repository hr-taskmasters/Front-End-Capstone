import React from 'react';
import IndividualQuestion from './IndividualQuestion.jsx';
import { ListGroup } from 'react-bootstrap';

const Questions = (props) => (
  <ListGroup variant="flush">
    {props.questions.map((question, index) =>
    <IndividualQuestion question={question} key={index} getAllQuestions={props.getAllQuestions}/>
    )}
  </ListGroup>
)

export default Questions;
