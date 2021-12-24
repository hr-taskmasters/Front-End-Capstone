import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {Button, Modal} from 'react-bootstrap';
import API_KEY from '../../config/config.js';
import Questions from './Questions.jsx';


const QuestionsAndAnswers = (props) => {

  const [product_id, setId] = useState(props);
  useEffect(() => {
    setId(props.product.id)
  }, [props])

  //const [product_id, setId] = useState(42366);
  const [questions, setQuestions] = useState([]);
  const [questionslen, setLength] = useState(0);

  useEffect(() => {
    getAllQuestions();
  }, [product_id]);

  const getAllQuestions = () => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions?product_id=${product_id}`, {
    headers: { 'Authorization': `${API_KEY}` }
    })
      .then((response) => {
        console.log(response.data.results);
        setQuestions(response.data.results);
        setLength(response.data.results.length);
      })
      .catch((err) => console.error(err));
  }

  const questionsPerPage = 2;
  let questionsHolding = [];
  const [quesToShow, setQuesToShow] = useState([]);
  const ref = useRef(questionsPerPage);
  const loopWithSlice = (start, end) => {
    const sliceQuestions = questions.slice(start, end);
    questionsHolding = questionsHolding.concat(sliceQuestions);
    setQuesToShow(questionsHolding);
  }
  useEffect(() => {
    loopWithSlice(0, questionsPerPage)
  }, []);

  console.log('questions to show', quesToShow);
  const handleLoadMoreClick = () => {
    loopWithSlice(ref.current, ref.current + questionsPerPage)
    ref.current += questionsPerPage;
  }

  //const [count, setCount] = useState(1);
  // const loopThroughQuestions = (count) => {
  //   for (
  //     let i = count * questionsPerPage - questionsPerPage;
  //     i < (questionsPerPage * count);
  //     i++
  //   ) {
  //     if (questions[i] !== undefined) {
  //       questionsHolding.push(questions[i]);
  //     }
  //   }
  //   setQuesToShow(questionsHolding);
  // }

  // useEffect(() => {
  //   setCount((prevCount) => prevCount + 1);
  //   loopThroughQuestions(count);
  // }, []);

  // const handleLoadMoreClick = () => {
  //   console.log('click load more');
  //   setCount(prevCount => prevCount + 1);
  //   loopThroughQuestions(count);
  // };

  return (
    <div className="questions-answers">
        <h3>QUESTIONS & ANSWERS</h3>
        <Questions questions={questions.slice(0,2)}/>
        {/* <Questions questions={quesToShow}/> */}
        {/* {questionslen > 2 &&

        } */}
        <Button onClick={handleLoadMoreClick}>LOAD MORE QUESTIONS</Button>
        <Button>ADD A QUESTION +</Button>
    </div>
  );
};


export default QuestionsAndAnswers;
