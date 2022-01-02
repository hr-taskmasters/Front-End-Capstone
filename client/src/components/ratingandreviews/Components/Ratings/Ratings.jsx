import React, { useState, useEffect} from 'react';
import RatingBreakdown from './RatingBreakdown.jsx'
import Factors from './Factors.jsx'
import Card from 'react-bootstrap/Card'


function Ratings (props) {


  // addToFiltered={props.addToFiltered}

  return (
    <Card>
      <Card.Title>
      </Card.Title>
      <Card.Body>
        <RatingBreakdown metaData={props.metaData} toggleFiltered={props.toggleFiltered}/>
        <Factors metaData={props.metaData}/>
      </Card.Body>
    </Card>
  )
}
export default Ratings;
