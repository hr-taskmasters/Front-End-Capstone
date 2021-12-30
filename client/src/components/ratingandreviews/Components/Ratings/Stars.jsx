import React, { useState, useEffect} from 'react';
import { Card, ProgressBar } from 'react-bootstrap'


function Stars (props) {
  const [totalRatings, setTotalRatings] = useState(0);
  const [ratings, setRatings] = useState({
      1: '',
      2: '',
      3: '',
      4: '',
      5: ''
  });



  useEffect(() => {
      setStarRatings()
      // addRatings()
    },[props.metaData]);

  const setStarRatings = () => {
    setRatings(props.metaData.ratings)
  }

  const addRatings = () => {
    let ratingsArr = Object.values(ratings);
    let total = ratingsArr.reduce((a, b) => {
      a + b
    })
    setTotalRatings(total);
  }



    return (
      <Card>
        <Card.Title>
            *average*  *star display*
        </Card.Title>
        <Card.Body>
            <div>*percent recommended*</div>
            <div>One stars</div>
            <ProgressBar variant="success" now={50}/>
            <div>Two stars</div>
            <ProgressBar variant="success" now={50}/>
            <div>Three stars</div>
            <ProgressBar variant="success" now={50}/>
            <div>Four stars</div>
            <ProgressBar variant="success" now={50}/>
            <div>Five stars</div>
            <ProgressBar variant="success" now={50}/>
          
        </Card.Body>
      </Card>
    )

}
export default Stars;

