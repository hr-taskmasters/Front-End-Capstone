import React, {useState, useEffect} from 'react';
import Answers from './Answers.jsx';
import { Button, Stack, Container, Row, Col } from 'react-bootstrap';
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
    <Container className='q_individual_q_grid' fluid='md'>
      <Row id='q_grid_row1'>
        <Col id='q_grid_row1_col1' xs={1}>
          <strong>Q:</strong>
        </Col>
        <Col id='q_grid_row1_col2'>
          <strong>
            {props.question.question_body}
          </strong>
        </Col>
        <Col id='q_grid_row1_col3' md={4}>
        <Stack direction='horizontal' gap={2}>
          <div className="ms-auto">
            {!markHelp ? (
              <div>
                <label>Helpful? </label>
                <u onClick={() => markHelpful()}>Yes</u>
                <span>({q_helpful_count})</span>
              </div>
            ) : (
              <div>
                <label>Helpful?</label>
                <label>Yes({q_helpful_count})</label>
              </div>
            )}
          </div>
          <div className="vr"/>
          <div>
            {!reported ? (
              <u onClick={() => markReport()}>Report</u>
            ) : (
              <label>Reported</label>
            )}
          </div>
        </Stack>
        </Col>
      </Row>
      <br></br>
      <Answers question={props.question}/>
      <Row id='q_grid_row3'>
        {/* <Button variant="outline-secondary">ADD A ANSWER </Button> */}
      </Row>
    </Container>
  )
  // return (
  //   <ListGroup.Item className="individual-question">
  //     <Stack direction="horizontal" gap={4}>
  //       <strong>Q:</strong>
  //       <strong>
  //         {props.question.question_body}
  //       </strong>
  //       {!markHelp ? (
  //           <div className="ms-auto">
  //             <label>Helpful? </label>
  //             <u onClick={() => markHelpful()}>Yes</u>
  //             <span>({q_helpful_count})</span>
  //           </div>
  //         ) : (
  //           <div className="ms-auto">
  //             <label>Helpful?</label>
  //             <label>Yes({q_helpful_count})</label>
  //           </div>
  //         )}
  //       <div className="vr"/>
  //       <div>
  //       {!reported ? (
  //         <u onClick={() => markReport()}>Report</u>
  //       ) : (
  //         <label>Reported</label>
  //       )}
  //       </div>
  //     </Stack>
  //     <Answers question={props.question}/>
  //     <Button variant="outline-secondary">ADD A ANSWER </Button>
  //   </ListGroup.Item>
  // )
};

export default IndividualQuestion;