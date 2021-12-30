import React, {useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js';
import IndividualAnswer from './IndividualAnswer.jsx';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import AddAnswer from './AddAnswer.jsx';

const Answers = (props) => {
  const [question_id, setQId] = useState(props);
  useEffect(() => {
    setQId(props.question.question_id)
  }, [props]);
  //const [question_id, setId] = useState(348532); // has photos in answer

  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    getAllAnswers();
  }, [question_id]);
  const getAllAnswers = () => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${question_id}/answers`, {
    headers: { 'Authorization': `${API_KEY}` }
    })
      .then((response) => {
        setAnswers(response.data.results);
      })
      .catch((err) => console.error(err));
  }
  const [ansPerPage, setAnsPerPage] = useState(2);
  const loadMoreAns = () => {
    setAnsPerPage(ansPerPage + ansPerPage);
  }
  const sliceAns = answers.slice(0, ansPerPage);

  return (
    <div>
      {answers.length > 0 &&
      <Row id='q_grid_row2'>
        <Col id='q_grid_row2_col1' xs={1}><strong>A:</strong></Col>
        <Col className="q_answerslist" id='q_grid_row2_col2'>
          {sliceAns.map((answer) =>
            <IndividualAnswer answer={answer} key={answer.answer_id} />
          )}
          <Col>
            <Stack direction='horizontal' gap={2}>
              {answers.length > 2 &&
                <strong onClick={() => loadMoreAns()}>LOAD MORE ANSWERS({answers.length-sliceAns.length})</strong>
              }
              <AddAnswer question_id={question_id}/>
            </Stack>
          </Col>
        </Col>
      </Row>
      }
      <br></br>
    </div>
  )

};
export default Answers;