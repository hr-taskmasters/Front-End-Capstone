import React, { useState, useEffect} from 'react';
import { Card, ProgressBar, Stack, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Stars from './Stars.jsx';


function RatingBreakdown (props) {
  const [ratings, setRatings] = useState({});
  const [totalRatings, setTotalRatings] = useState(null);
  const [percentRecommended, setPercentRecommended] = useState(null);
  const [filterList, setFilterList] = useState('')
 
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
  
  const showFilters = (obj) => {
    let filters = '';
    for (let key in obj){
      if(obj[key] === true){
        filters.length < 50 ? filters += ` ${key} stars |` 
        : filters += ` ${key} stars`
      }
    }
    return filters;
  }

  return (
    <Card>
      <Card.Title>
        <Stars ratings={ratings} totalRatings={totalRatings}/>
      </Card.Title>
      <Card.Body>
        { ratings ?
        <>
        <Stack direction="horizontal" gap={2}>
            <div className="percent-recommended">{percentRecommended}%</div> 
            <>of reviewers recommend this product</>
        </Stack>
        <br></br>
        <Stack gap={2}>
          <div className="breakdowns" >
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">toggle filter</Tooltip>}
            >
              <Button variant="outline-secondary" size="sm" 
              name="five" onClick={(e) => props.toggleFiltered(e.target.name)}>Five stars: {ratings['5'] || '0'}</Button>
            </OverlayTrigger>
          </div>
            <ProgressBar variant="success" now={(ratings['5'] || 0) / totalRatings * 100} />
          <div className="breakdowns">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">toggle filter</Tooltip>}
            >
              <Button variant="outline-secondary" size="sm"
              name="four" onClick={(e) => props.toggleFiltered(e.target.name)}>Four stars: {ratings['4'] || '0'}</Button>
            </OverlayTrigger>
          </div>
            <ProgressBar variant="success" now={(ratings['4'] || 0) / totalRatings * 100} /> 
          <div className="breakdowns">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">toggle filter</Tooltip>}
            >
              <Button variant="outline-secondary" size="sm"
              name="three" onClick={(e) => props.toggleFiltered(e.target.name)}>Three stars: {ratings['3'] || '0'}</Button>
            </OverlayTrigger>
          </div> 
            <ProgressBar variant="success" now={(ratings['3'] || 0) / totalRatings * 100} />
          <div className="breakdowns">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">toggle filter</Tooltip>}
            >
              <Button variant="outline-secondary" size="sm"
              name="two" onClick={(e) => props.toggleFiltered(e.target.name)}>Two stars: {ratings['2'] || '0'}</Button>
            </OverlayTrigger>
          </div>
            <ProgressBar variant="success" now={(ratings['2'] || 0) / totalRatings * 100} /> 
          <div className="breakdowns">
          <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">toggle filter</Tooltip>}
            >
              <Button variant="outline-secondary" size="sm"
              name="one" onClick={(e) => props.toggleFiltered(e.target.name)}>One star: {ratings['1'] || '0'}</Button>
            </OverlayTrigger>
          </div>
            <ProgressBar variant="success" now={(ratings['1'] || 0) / totalRatings * 100} /> 
          </Stack>
          <br></br>
            {showFilters(props.filteredBy).length > 0 &&
            <>
            <Stack direction="horizontal" gap={2}>
              <h5>Filtered by:</h5>
              <Button variant="outline-secondary" size="sm" 
              className="ms-auto" onClick={() => props.resetFiltered()}>Remove all filters</Button>
            </Stack>
            <div className="filtered-list">{showFilters(props.filteredBy)}</div>
            </>}
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