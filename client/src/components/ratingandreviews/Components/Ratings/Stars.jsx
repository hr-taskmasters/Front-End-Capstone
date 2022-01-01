import React, { useState, useEffect} from 'react';
import { Stack } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

function Stars (props) {

    const[starAvg, setStarAvg] = useState(null);

    useEffect(() => {
        calcStarAvg()
    }, [props.ratings])

    const calcStarAvg = () =>{
        if(props.ratings && props.totalRatings){
            const weightedTotalArr = [
                Number(props.ratings['1']) * 0.2,
                Number(props.ratings['2']) * 0.4,
                Number(props.ratings['3']) * 0.6,
                Number(props.ratings['4']) * 0.8,
                Number(props.ratings['5']) 
            ];
            const weightedTotal = weightedTotalArr.reduce((a,b) => a + b);
            const average = (weightedTotal / props.totalRatings) * 5
            const roundedAverage = (Math.round(average * 4) / 4).toFixed(2);
            setStarAvg(roundedAverage);
        }
    }


    return (
        <>
        <Stack direction="horizontal" gap={3}>
            <div className="average-review-header">{Number(starAvg).toFixed(1)}</div>
        <Rating readonly={true} 
            ratingValue={starAvg * 20} 
            initialValue={starAvg * 20} 
            allowHalfIcon={true}
            size={35}/>
        </Stack>
        <h5 className="total-ratings-header">{props.totalRatings} ratings</h5>
        </>
    )
}

export default Stars