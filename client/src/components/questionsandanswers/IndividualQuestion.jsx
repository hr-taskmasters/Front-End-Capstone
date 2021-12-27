import React, {useState, useEffect} from 'react';
import Answers from './Answers.jsx';
import { ListGroup, Button, Stack, Collapse } from 'react-bootstrap';
import axios from 'axios';
import API_KEY from '../../config/config.js';

const IndividualQuestion = (props) => {
  const [q_helpful_count, setQCount] = useState(() => {return props.question.question_helpfulness})
  const [markHelp, setMark] = useState(false);
  const markHelpful = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${question_id}/helpful`,
    { question_helpfulness: q_helpful_count + 1 } ,
      { headers: { 'Authorization': `${API_KEY}` } })
        .then((response) => {
          console.log(response)
          setMark(true);
        })
        .catch((err) => console.error(err));
  }
  // const handleHelpfulClick = () => {
  //   setQCount(q_helpful_count + 1)
  // }
  const question_id = props.question.question_id;
  const [reported, setReported] = useState(false);
  const markReport = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${question_id}/report`,
      { reported: true } ,
      { headers: { 'Authorization': `${API_KEY}` } })
        .then((response) => {
          setReported(true);
          // update Q helpfulness count: setQCount()
        })
        .catch((err) => console.error(err));
  }
  const [isLoad, setIsLoad] = [false];

  return (
    <ListGroup.Item>
      <Stack direction="horizontal" gap={4}>
        <strong>Q:</strong>
        <strong>
          {props.question.question_body}
        </strong>
        {!markHelp ? (
            <div className="ms-auto">
              <label>Helpful? </label>
              <u onClick={() => markHelpful()}>Yes</u>
              <span>({q_helpful_count})</span>
            </div>
          ) : (
            <div className="ms-auto">
              <label>Helpful?</label>
              <span>Yes({q_helpful_count})</span>
            </div>
          )}
        <div className="vr"/>
        <div>
        {!reported ? (
          <u onClick={() => markReport()}>Report</u>
        ) : (
          <label>Reported</label>
        )}
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