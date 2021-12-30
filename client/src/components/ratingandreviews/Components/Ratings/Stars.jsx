import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'


function Stars (props) {

    return (
      <Card>
        <Card.Title>
            *average*  *star display*
        </Card.Title>
        <Card.Body>
          
            <div>100% of reviews recommend this product</div>
            <div>One stars</div>
            <div>Two stars</div>
            <div>Three stars</div>
            <div>Four stars</div>
            <div>Five stars</div>
          
        </Card.Body>
      </Card>
    )

}
export default Stars;

{/* <div>100% of reviews recommend this product</div>
            <div>One stars</div>
            <div>Two stars</div>
            <div>Three stars</div>
            <div>Four stars</div>
            <div>Five stars</div> */}