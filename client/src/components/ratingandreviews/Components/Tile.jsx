import React, { useState, useEffect} from 'react';
import moment from 'moment';
import ReviewBody from './ReviewBody.jsx';



function Tile (props) {
    return (
        <>
            <div>Star Rating</div>
            <div>{moment(props.review.date).fromNow()}</div> 
            <div>{props.review.summary}</div>
            <ReviewBody review={props.review}/><br></br>
        </>
    )

}
export default Tile;