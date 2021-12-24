import React, { useState, useEffect} from 'react';
import Tile from './Tile.jsx'

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



function List (props) {

    const [moreReviews, setMoreReviews] = useState(false);
    //display 2 tiles initially and more when moreReviews is true
    const[tileNum, setTileNum] = useState(2)
   

    // console.log(props)
    return (
        <div>
            <button>Sort Dropdown</button>
            <button>Submit Review</button>
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
            <button>More Reviews</button>
        </div>
    )
};
export default List;