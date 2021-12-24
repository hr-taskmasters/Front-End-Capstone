import React, { useState, useEffect} from 'react';
import Tile from './Tile.jsx'

function List (props) {

    const [moreReviews, setMoreReviews] = useState(false);
    //display 2 tiles initially and more when moreReviews is true
    const[tileNum, setTileNum] = useState(2)

    return (
        <div>
            <button>Sort Dropdown</button>
            <button>Submit Review</button>
            <div>
                {
                    props.sampleReviews.map(tile => (
                        <Tile key={tile.review_id} review={tile}/>
                    ))
                }
            </div>
            <button>More Reviews</button>
        </div>
    )
};
export default List;