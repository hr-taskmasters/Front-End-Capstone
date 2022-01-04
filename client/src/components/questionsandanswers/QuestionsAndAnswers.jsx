import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Modal, Container, Row, Col} from 'react-bootstrap';
import API_KEY from '../../config/config.js';
import Questions from './Questions.jsx';
import Search from './Search.jsx';
import AddQuestion from './AddQuestion.jsx';

const QuestionsAndAnswers = (props) => {
  const [product_id, setId] = useState(42366);
  const [product_name, setName] = useState('');
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    if(props.product.id) {
      setId(props.product.id);
      setName(props.product.name);
    }
  }, [props]);
  useEffect(() => {
    getAllQuestions(product_id);
  }, [product_id]);
  const getAllQuestions = (product_id) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions?product_id=${product_id}&page=1&count=1000`, {
    headers: { 'Authorization': `${API_KEY}` }
    })
      .then((response) => {
        setQuestions(response.data.results);
      })
      .catch((err) => console.error(err));
  }

  const [searchTerm, setSearchTerm] = useState('');
  const filterQuestions = (questionlist, inputTerm) => {
    if(!inputTerm || inputTerm.length < 3) {
      return questionlist;
    };
    return questionlist.filter((question) => {
      const body = question.question_body.toLowerCase();
      return body.includes(inputTerm.toLowerCase());
    });
  };
  const length = questions.length;
  const [numPerPage, setNumPerPage] = useState(4);
  const loadMore = () => {
    setNumPerPage(numPerPage + 2);
  };
  const collapse = () => {
    setNumPerPage(4);
  };
  const sliceQuesions = questions.slice(0, numPerPage);
  const filteredQues = filterQuestions(sliceQuesions, searchTerm);

  const changeBtnMode = () => {
    if(numPerPage < length) {
      return(
        <Button id='loadBtn' variant="outline-secondary" onClick={() => loadMore()}>LOAD MORE QUESTIONS ({questions.length-sliceQuesions.length})</Button>
      );
    } else {
      return(
        <Button id='collapseBtn' variant="outline-secondary" onClick={()=> collapse()}>Collapse</Button>
      );
    };
  };

  return (
    <div className='questions-answers'>
      <div id='questions_answers_container'>
        <div className='questions_widget'>
          <h5 className='questions_widget_header'>QUESTIONS & ANSWERS</h5>
          <Container className='questions_list'>
            <Row id='q_list_search'>
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </Row>
            {filteredQues.length > 0 && (
            <Row id='q_list_questions_container'>
              <Questions questions={filteredQues} product_name={product_name}/>
                <div>
                  {questions.length > 4 && changeBtnMode()}
                </div>
            </Row>
            )}
            <Row id='q_list_addQuestion'>
              <AddQuestion product_id={product_id} product_name={product_name} getAllQuestions={getAllQuestions}/>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};


export default QuestionsAndAnswers;
