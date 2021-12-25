import React, { useState, useEffect} from 'react';
import moment from 'moment';
import { Stack, Image, ListGroup } from 'react-bootstrap';

const IndividualAnswer = (props) => {
  const [a_helpful_count, setACount] = useState(() => {return props.answer.helpfulness})
  const handleHelpfulClick = () => {
    setACount(a_helpful_count + 1)
  }
  const photos = props.answer.photos;
  return (
    <div>
      <Stack gap={2} className="col-md-5 mx-auto">
        {/* <strong>A:</strong> */}
        <div>
          {props.answer.body}
        </div>
        <Stack direction="horizontal" gap={6}>
          <div>
            by {props.answer.answerer_name}, {moment(props.answer.date).format('MMMM Do YYYY')}
          </div>
          <div className="vr"/>
          <div className="ms-auto">
            <label> Helpful? </label>
            <u onClick={handleHelpfulClick}>Yes</u>
            <span>({a_helpful_count})</span>
          </div>
          <div className="vr"/>
          <u className="ms-auto">Report</u>
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
  // return (
  //   <ListGroup.Item className="Q-answer-container">
  //     <div className="Q-answer-body">
  //     <label className="Q-answer">
  //       <strong>A:</strong>
  //       {props.answer.body}
  //     </label>
  //     <label className="Q-answererAndDate">
  //       by {props.answer.answerer_name}, {moment(props.answer.date).format('MMMM Do YYYY')}
  //     </label>
  //     <span className="Q-answer-helpful">
  //       <label> Helpful? </label>
  //       <u onClick={handleHelpfulClick}>Yes</u>
  //       <span>({a_helpful_count})</span>
  //     </span>
  //     <span> | </span>
  //     <u>Report</u>
  //   </div>
  //   {photos.length > 0 &&
  //     <div>
  //       <label>Yes, as you can see in these photos.</label>
  //       <div>
  //         {photos.map((photo) =>
  //         <Image src={photo.url} thumbnail />
  //         )}
  //       </div>
  //     </div>
  //   }
  //   <br></br>
  //   </ListGroup.Item>
  // )
}

export default IndividualAnswer;