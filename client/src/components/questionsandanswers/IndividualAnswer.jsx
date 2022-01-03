import React, { useState, useEffect} from 'react';
import moment from 'moment';
import { Stack, Image, Modal, Row, closeButton } from 'react-bootstrap';
import axios from 'axios';
import API_KEY from '../../config/config.js';

const IndividualAnswer = (props) => {
  const answer_id = props.answer.answer_id;
  const [a_helpful_count, setACount] = useState(() => {return props.answer.helpfulness})
  const [markHelp, setMark] = useState(false);
  const markHelpful = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/answers/${answer_id}/helpful`,
    { helpfulness: a_helpful_count + 1 } ,
    { headers: { 'Authorization': `${API_KEY}` } })
    .then((response) => {
      setACount(a_helpful_count + 1);
      setMark(true);
    })
    .catch((err) => console.error(err));
  }

  const [reported, setReported] = useState(false);
  const markReport = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/answers/${answer_id}/report`,
    { reported: true } ,{
      headers: { 'Authorization': `${API_KEY}` }
    })
    .then((response) => {
      setReported(true);
    })
    .catch((err) => console.error(err));
  }

  const photos = props.answer.photos;
  const [isEnlarge, setLarge] = useState({
    show: false,
    index: 0
  });

  const [isSeller, setIsSeller] = useState(props.answer.answerer_name==='Seller');

  return (
    <div>
      <div id='q-individual_a_container'>
        <div id='q_a_row1'>{props.answer.body}</div>
        {/* <br></br> */}
        <Row id='q_a_row2'>
          <Stack direction="horizontal" gap={2}>
            <div id='q_a_row2_name'>
              {isSeller ? (
                <div>
                by <b>Seller</b>, {moment(props.answer.date).format('MMMM Do YYYY')}
                </div>
              ) : (
                <div>
                by {props.answer.answerer_name}, {moment(props.answer.date).format('MMMM Do YYYY')}
                </div>
              )}
            </div>
            <div className="vr"/>
            <div id='q_a_row2_markAHelpful'>
              {!markHelp ? (
                <div>
                  <label> Helpful? </label>
                  <u onClick={() => markHelpful()}>Yes</u>
                  <span>({a_helpful_count})</span>
                </div>
              ) : (
                <div>
                  <label> Helpful? </label>
                  <label>Yes({a_helpful_count})</label>
                </div>
              )}
            </div>
            <div className="vr"/>
            <div id='q_a_row2_markAReport'>
              {!reported ? (
                <u onClick={() => markReport()}>Report</u>
              ) : (
                <label>Reported</label>
              )}
            </div>
          </Stack>
        </Row>
        {/* <br></br> */}
        <Row id='q_a_row3'>
        {photos.length > 0 &&
          <div>
            <label>Yes, as you can see in these photos.</label>
            <div>
              {photos.map((photo, i) =>
                <div>
                  <Image className="q_ans_photos" src={photo.url} thumbnail onClick={()=> setLarge({show: true, index: i})}/>
                  <Modal
                    show={isEnlarge.show} centered size='large'
                    onHide={() => setLarge({show: false, index: i})}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <Image src={photos[isEnlarge.index].url} thumbnail/>
                    </Modal.Body>
                  </Modal>
                </div>
              )}
            </div>
          </div>
        }
        </Row>
        <br></br>
      </div>
    </div>
  )

}

export default IndividualAnswer;