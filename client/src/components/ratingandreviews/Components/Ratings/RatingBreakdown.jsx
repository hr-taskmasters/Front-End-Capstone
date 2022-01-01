import React, { useState, useEffect} from 'react';
import { Card, ProgressBar, Stack } from 'react-bootstrap';
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
      let trueNum = Number(recObj['true']) || 0;
      let falseNum = Number(recObj['false']) || 0;
      let total = trueNum + falseNum;
      let avg = (trueNum / total) * 100;
      let roundAvg = Math.round(avg)
      setPercentRecommended(roundAvg);
    }
  }

  return (
    <Card>
      <Card.Title>
          <Stars ratings={ratings} totalRatings={totalRatings}/>
      </Card.Title>
      <Card.Body>
        { ratings ?
        <>
          <div>Five stars: {ratings['5'] || '0'}</div>
          <ProgressBar variant="success" now={(ratings['5'] || 0) / totalRatings * 100} /> 
          <div>Four stars: {ratings['4'] || '0'}</div>
          <ProgressBar variant="success" now={(ratings['4'] || 0) / totalRatings * 100} /> 
          <div>Three stars: {ratings['3'] || '0'}</div>
          <ProgressBar variant="success" now={(ratings['3'] || 0) / totalRatings * 100} /> 
          <div>Two stars: {ratings['2'] || '0'}</div>
          <ProgressBar variant="success" now={(ratings['2'] || 0) / totalRatings * 100} /> 
          <div>One star: {ratings['1'] || '0'}</div>
          <ProgressBar variant="success" now={(ratings['1'] || 0) / totalRatings * 100} /> 
          <br></br>
          <Stack direction="horizontal" gap={2}>
            <div className="percent-recommended">{percentRecommended}%</div> 
            <>of reviewers recommend this product</>
            </Stack> 
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