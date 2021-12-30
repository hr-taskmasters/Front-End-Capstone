import React, { useState, useEffect} from 'react';
import Stars from './Stars.jsx'
import Factors from './Factors.jsx'
import Card from 'react-bootstrap/Card'


function Ratings (props) {
  const ratings = props.metaData.ratings
  const [starAvg, setStarAvg] = useState({})


  // useEffect(() => {
  //   calcStarAverage(props.metaData.ratings);
  // },[props.metaData]);

  // //calculate the average star count
  // const calcStarAverage = (ratingsObj) => {
  //  if(Object.keys(ratingsObj).length > 0){
    
  //  }
  // }


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



