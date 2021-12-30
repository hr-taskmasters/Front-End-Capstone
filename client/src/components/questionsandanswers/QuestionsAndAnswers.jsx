import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Modal, Container, Row, Col} from 'react-bootstrap';
import API_KEY from '../../config/config.js';
import Questions from './Questions.jsx';
import Search from './Search.jsx';


const QuestionsAndAnswers = (props) => {

  const [product_id, setId] = useState(props);
  useEffect(() => {
    setId(props.product.id)
  }, [props])
  //const [product_id, setId] = useState(42380); //test for specific product, has more answers and photos in answer
  //const [product_id, setId] = useState(42370); // has seller answered

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
      .catch((err) => { return; });
  }

  const [searchTerm, setSearchTerm] = useState('');
  const filterQuestions = (questionlist, inputTerm) => {
    if(!inputTerm || inputTerm.length < 3) {
      return questionlist;
    };
    return questionlist.filter((question) => {
      const body = question.question_body.toLowerCase();
      return body.includes(inputTerm);
    });
  };

  const [numPerPage, setNumPerPage] = useState(4);
  const loadMore = () => {
    setNumPerPage(numPerPage + 2);
  }
  const sliceQuesions = questions.slice(0, numPerPage);
  const filteredQues = filterQuestions(sliceQuesions, searchTerm);

  return (
    <div className='questions-answers'>
      <div id='questions_answers_container'>
        <div className='questions_widget'>
          <h5 className='questions_widget_header'>QUESTIONS & ANSWERS</h5>
          <Container className='questions_list'>
            <Row id='q_list_search'>
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </Row>
            <Row id='q_list_questions_container'>
              <Questions questions={filteredQues} />
                <div>
                  {questions.length > 4 &&
                    <Button variant="outline-secondary" onClick={() => loadMore()}>LOAD MORE QUESTIONS ({questions.length-sliceQuesions.length})</Button>
                  }
                </div>
            </Row>
            <Row id='q_list_addQuestion'>
              {/* <Button variant="outline-secondary">ADD A QUESTION +</Button> */}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )

};


export default QuestionsAndAnswers;
