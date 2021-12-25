import React, {useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js';
import IndividualAnswer from './IndividualAnswer.jsx';

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
  return (
    <div>
      <div>
        {answers.map((answer) =>
        <IndividualAnswer answer={answer} key={answer.answer_id} />
        )}
      </div>
    </div>
  )

};
export default Answers;