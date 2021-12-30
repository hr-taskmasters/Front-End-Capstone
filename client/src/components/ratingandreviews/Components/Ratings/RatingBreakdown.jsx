import React, { useState, useEffect} from 'react';
import { Card, ProgressBar } from 'react-bootstrap'


function RatingBreakdown (props) {
  const [ratings, setRatings] = useState({});
  const [totalRatings, setTotalRatings] = useState(null);
  const [percentRecommended, setPercentRecommended] = useState(null);
 

  useEffect(() => {
    setRatings(props.metaData.ratings)
    // addRatings(props.metaData.ratings)
  },[props.metaData.ratings]);

  useEffect(() => {
    addRatings(ratings)
  }, [ratings])


  const addRatings = (ratingsObj) => {
    let ratingsArr = Object.values(ratingsObj);
    let total = ratingsArr.reduce((a, b) => Number(a) + Number(b));
    setTotalRatings(total);
  }

  const avgRecommended = (recObj) => {
    let trueNum = Number(recObj['true']);
    let falseNum = Number(recObj['false']);
    let total = trueNum + falseNum;
    let avg = (trueNum / total) * 100;
    let roundAvg = Math.round(avg)
    setPercentRecommended(roundAvg);
  }


    return (
      <Card>
        <Card.Title>
            *average*  *star display*
        </Card.Title>
        <Card.Body>
            <div>*percent recommended*</div> {/*avgRecommended*/}
            <div>One star:</div>
            <ProgressBar variant="success" now={50}/> {/* ratings['1'] / totalRatings */}
            <div>Two stars:</div>
            <ProgressBar variant="success" now={50}/> {/* ratings['2'] / totalRatings */}
            <div>Three stars:</div>
            <ProgressBar variant="success" now={50}/> {/* ratings['3'] / totalRatings */}
            <div>Four stars:</div>
            <ProgressBar variant="success" now={50}/> {/* ratings['4'] / totalRatings */}
            <div>Five stars:</div>
            <ProgressBar variant="success" now={50}/> {/* ratings['5'] / totalRatings */}
        </Card.Body>
      </Card>
    )

}
export default RatingBreakdown;

 // const setStarRatings = () => {
  //   setRatings(props.metaData.ratings)
  // }

  // const [ratings, setRatings] = useState({});
  //     1: '',
  //     2: '',
  //     3: '',
  //     4: '',
  //     5: ''
  // });