import React, { useState, useEffect} from 'react';
import moment from 'moment';
import { Stack, Image, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import API_KEY from '../../config/config.js';

const IndividualAnswer = (props) => {
  const [a_helpful_count, setACount] = useState(() => {return props.answer.helpfulness})
  const handleHelpfulClick = () => {
    setACount(a_helpful_count + 1)
  }
  const photos = props.answer.photos;
  const answer_id = props.answer.answer_id;

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

  return (
    <div>
      <Stack gap={4}>
        <div>{props.answer.body}</div>
        <Stack direction="horizontal" gap={6}>
          <div>
            by {props.answer.answerer_name}, {moment(props.answer.date).format('MMMM Do YYYY')}
          </div>
          <div className="vr ms-auto"/>
          <div className="ms-auto">
            <label> Helpful? </label>
            <u onClick={handleHelpfulClick}>Yes</u>
            <span>({a_helpful_count})</span>
          </div>
          <div className="vr ms-auto"/>
          {!reported ? (
            <u className="ms-auto" onClick={() => markReport()}>Report</u>
          ) : (
            <u className="ms-auto">Reported</u>
          )}
        </Stack>
        {photos.length > 0 &&
          <div>
            <label>Yes, as you can see in these photos.</label>
            <div>
              {photos.map((photo) =>
                <Image src={photo.url} thumbnail />
              )}
            </div>
          </div>
        }
        <br></br>
      </Stack>
    </div>
  )
}

export default IndividualAnswer;