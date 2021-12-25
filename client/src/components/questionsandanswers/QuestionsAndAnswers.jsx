import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Modal, Spinner} from 'react-bootstrap';
import API_KEY from '../../config/config.js';
import Questions from './Questions.jsx';


const QuestionsAndAnswers = (props) => {

  const [product_id, setId] = useState(props);
  useEffect(() => {
    setId(props.product.id)
  }, [props])

  //const [product_id, setId] = useState(42370);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getAllQuestions();
  }, [product_id]);

  const getAllQuestions = () => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions?product_id=${product_id}`, {
    headers: { 'Authorization': `${API_KEY}` }
    })
      .then((response) => {
        //console.log('questions',response.data.results);
        setQuestions(response.data.results);
      })
      .catch((err) => console.error(err));
  }

  const [numPerPage, setNumPerPage] = useState(4);
  const loadMore = () => {
    setNumPerPage(numPerPage + 2);
  }
  const sliceQuesions = questions.slice(0, numPerPage);
  return (
    <div className="questions-answers">
        <h5>QUESTIONS & ANSWERS</h5>
        <Questions questions={sliceQuesions} />
        <Button variant="outline-secondary" onClick={() => loadMore()}>LOAD MORE QUESTIONS</Button>
        <Button variant="outline-secondary">ADD A QUESTION +</Button>
    </div>
  );
};


export default QuestionsAndAnswers;
