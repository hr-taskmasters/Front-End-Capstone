import React, {useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js';
import IndividualAnswer from './IndividualAnswer.jsx';
import { Stack, ListGroup } from 'react-bootstrap';

const Answers = (props) => {
  // const [question_id, setQId] = useState(props);
  // useEffect(() => {
  //   setQId(props.question.question_id)
  // }, [props]);
  const [question_id, setId] = useState(348532);

  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    getAllAnswers();
  }, [question_id]);
  const getAllAnswers = () => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${question_id}/answers`, {
    headers: { 'Authorization': `${API_KEY}` }
    })
      .then((response) => {
        console.log('answers-list', response.data.results);
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
        <strong>A:</strong>
        {sliceAns.map((answer) =>
        <IndividualAnswer answer={answer} key={answer.answer_id} />
        )}
        <strong onClick={() => loadMoreAns()}>LOAD MORE ANSWERS</strong>
      </div>
  )

};
export default Answers;