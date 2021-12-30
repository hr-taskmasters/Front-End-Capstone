import React, { useState, useEffect} from 'react';
import RatingBreakdown from './RatingBreakdown.jsx'
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
          <RatingBreakdown metaData={props.metaData}/>
          <Factors />
        </Card.Body>
      </Card>
    )

}
export default Ratings;



