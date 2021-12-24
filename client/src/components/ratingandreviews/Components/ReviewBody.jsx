import React, { useState, useEffect} from 'react';

function ReviewBody (props) {
//submit up to 5 images no more

//default to first 250 chars
//show more button should only appear when there are mor than 250 chars

//only display recommended if recommended it true

    return (
        <div>
            <div>{props.review.body}</div>
            <div>{props.review.recommended}</div>
            {/* displayImages */}
            <button>Show More</button>
        </div>
    )

}
export default ReviewBody;