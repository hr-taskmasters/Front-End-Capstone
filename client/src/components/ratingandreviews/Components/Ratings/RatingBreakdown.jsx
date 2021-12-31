import React, { useState, useEffect} from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import Stars from './Stars.jsx';


function RatingBreakdown (props) {
  const [ratings, setRatings] = useState({});
  const [totalRatings, setTotalRatings] = useState(null);
  const [percentRecommended, setPercentRecommended] = useState(null);
  const [averageRating, setAverageRating] = useState(null);
 
  useEffect(() => {
    setRatings(props.metaData.ratings)
    sumRatings(props.metaData.ratings)
    avgRecommended(props.metaData.recommended)
  },[props.metaData.ratings]);

  const sumRatings = (ratingsObj) => {
    if(props.metaData.ratings){
      let ratingsArr = Object.values(ratingsObj);
      let total = ratingsArr.reduce((a, b) => Number(a) + Number(b));
      setTotalRatings(total);
    }
  }

  const avgRecommended = (recObj) => {
    if(props.metaData.recommended){
      let trueNum = Number(recObj['true']);
      let falseNum = Number(recObj['false']);
      let total = trueNum + falseNum;
      let avg = (trueNum / total) * 100;
      let roundAvg = Math.round(avg)
      setPercentRecommended(roundAvg);
    }
  }

  return (
    <Card>
      <Card.Title>
          <Stars />
      </Card.Title>
      <Card.Body>
        { ratings ?
        <>
          <div>{percentRecommended}% of reviewers recommend this product</div> 
          <div>Five stars:</div>
          <ProgressBar variant="success" now={ratings['5'] / totalRatings * 100}/> 
          <div>Four stars:</div>
          <ProgressBar variant="success" now={ratings['4'] / totalRatings * 100}/> 
          <div>Three stars:</div>
          <ProgressBar variant="success" now={ratings['3'] / totalRatings * 100}/> 
          <div>Two stars:</div>
          <ProgressBar variant="success" now={ratings['2'] / totalRatings * 100}/> 
          <div>One star:</div>
          <ProgressBar variant="success" now={ratings['1'] / totalRatings * 100}/> 
          </>
          : <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          }
      </Card.Body>
    </Card>
  )
}

export default RatingBreakdown;

 // useEffect(() => {
  //   addRatings(ratings)
  // }, [ratings])