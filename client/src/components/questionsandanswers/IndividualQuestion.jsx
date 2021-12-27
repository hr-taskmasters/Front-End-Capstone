import React, {useState, useEffect} from 'react';
import Answers from './Answers.jsx';
import { ListGroup, Button, Stack } from 'react-bootstrap';
import axios from 'axios';
import API_KEY from '../../config/config.js';

const IndividualQuestion = (props) => {
  const question_id = props.question.question_id;

  const [q_helpful_count, setQCount] = useState(() => {return props.question.question_helpfulness})
  const [markHelp, setMark] = useState(false);
  const markHelpful = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${question_id}/helpful`,
    { question_helpfulness: q_helpful_count + 1 } ,
      { headers: { 'Authorization': `${API_KEY}` } })
        .then((response) => {
          setQCount(q_helpful_count + 1);
          setMark(true);
        })
        .catch((err) => console.error(err));
  }

  const [reported, setReported] = useState(false);
  const markReport = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${question_id}/report`,
      { reported: true } ,
      { headers: { 'Authorization': `${API_KEY}` } })
        .then((response) => {
          setReported(true);
        })
        .catch((err) => console.error(err));
  }

  return (
    <ListGroup.Item className="individual-question">
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
              <label>Yes({q_helpful_count})</label>
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
};

export default IndividualQuestion;