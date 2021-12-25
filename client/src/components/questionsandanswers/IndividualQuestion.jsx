import React, {useState, useEffect} from 'react';
import Answers from './Answers.jsx';
import { ListGroup, Button, Stack } from 'react-bootstrap';

const IndividualQuestion = (props) => {
  const [q_helpful_count, setQCount] = useState(() => {return props.question.question_helpfulness})
  const handleHelpfulClick = () => {
    setQCount(q_helpful_count + 1)
  }
  return (
    <ListGroup.Item>
      <Stack direction="horizontal" gap={4}>
        <strong>Q:</strong>
        <strong>
          {props.question.question_body}
        </strong>
        <div className="ms-auto">
          <label>Helpful? </label>
          <u onClick={handleHelpfulClick}>Yes</u>
          <span>({q_helpful_count})</span>
        </div>
        <div className="vr"/>
        <div>
        <u>Report</u>
        </div>
      </Stack>
      <Answers question={props.question}/>
      <Button variant="outline-secondary">ADD A ANSWER </Button>
    </ListGroup.Item>
  )
  // return (
  // <ListGroup.Item className="Q-question-container">
  //   <div className="Q-question-body">
  //     <label className="Q-question">
  //       <strong>Q:</strong>
  //       {props.question.question_body}
  //     </label>
  //     <span className="Q-question-helpful">
  //       <label>Helpful? </label>
  //       <u onClick={handleHelpfulClick}>Yes</u>
  //       <span>({q_helpful_count})</span>
  //     </span>
  //     <span> | </span>
  //     <u>Report</u>
  //   </div>
  //   <Answers question={props.question}/>
  //   <Button variant="outline-secondary">ADD A ANSWER </Button>
  //   <br></br>
  // </ListGroup.Item>
  // )

};

export default IndividualQuestion;