import React, { useState, useEffect} from 'react';
import Stars from './Stars.jsx'
import Factors from './Factors.jsx'
import Card from 'react-bootstrap/Card'


function Ratings (props) {

    return (
      <Card>
        <Card.Title>
        </Card.Title>
        <Card.Body>
          <Stars />
          <Factors />
        </Card.Body>
      </Card>
    )

}
export default Ratings;


