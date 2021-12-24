import React, { useState, useEffect} from 'react';

function ReviewBody (props) {



    return (
        <div>
            <div>{props.review.body}</div>
        </div>
    )

}
export default ReviewBody;