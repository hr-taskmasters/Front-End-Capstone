import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'


function Stars (props) {

    return (
      <Card>
        <Card.Title>
            *average*  *star display*
        </Card.Title>
        <Card.Body>
          <Card.Text>
           100% of reviews recommend this product
          </Card.Text>
        </Card.Body>
      </Card>
    )

}
export default Stars;