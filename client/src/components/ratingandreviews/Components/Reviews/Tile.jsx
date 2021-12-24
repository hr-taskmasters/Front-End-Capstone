import React, { useState, useEffect} from 'react';
import moment from 'moment';
import ReviewBody from './ReviewBody.jsx';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function Tile (props) {
    return (
    <>
      <Card>
        <Card.Header>*star rating* -- *user* -- {moment(props.review.date).fromNow()}</Card.Header>
        <Card.Body>
          <Card.Title>{props.review.title}</Card.Title>
          <Card.Text>
          {props.review.summary}
          </Card.Text>
          <ReviewBody review={props.review}/>
        </Card.Body>
      </Card>
    </>
    )

}
export default Tile;

