import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Tile from './Tile.jsx'
import Sort from './Sort.jsx'


function Reviews (props) {

    const [moreReviews, setMoreReviews] = useState(false);
    //display 2 tiles initially and more when moreReviews is true
    const[tileNum, setTileNum] = useState(2)
   

    // console.log(props)
    return (
        <Card>
        <Card.Header>*Total* reviews, sorted by <Sort /></Card.Header>
        <Card.Body>
        {props.reviews.results ? 
            <div>
                {props.reviews.results.map(tile => (
                    <Tile key={tile.review_id} review={tile}/>
                ))}
            </div>
            : 
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            }
            <>
              <Button variant="outline-secondary">Submit Review</Button>{' '}
              <Button variant="outline-secondary">More Reviews</Button>{' '}
            </>
        </Card.Body>
      </Card>
    )
};
export default Reviews;


// <div>
//     <button>Sort Dropdown</button>
//     <button>Submit Review</button>
//     {props.reviews.results ? 
//     <div>
//         {props.reviews.results.map(tile => (
//             <Tile key={tile.review_id} review={tile}/>
//         ))}
//     </div>
//     : 
//     <div className="spinner-border" role="status">
//         <span className="visually-hidden">Loading...</span>
//     </div>
//     }
//     <button>More Reviews</button>
// </div>



// class List extends React.Component {
//   constructor(props){
//     super(props);
    
//     this.state = {
//       reviews: {}
//     }
    
//     }
//     componentDidMount(){
//         // this.props.getReviews()
        
//     }
    

//   render() {
    
//       return (
//         <div>
//             <button>Sort Dropdown</button>
//             <button>Submit Review</button>
//             <div>
//                 {
//                     // props.reviews.results.map(tile => (
//                 //     <Tile key={tile.review_id} review={tile}/>
//                 // ))
//                 }
//             </div>
//             <button>More Reviews</button>
//         </div>
//       )
//   }
// }