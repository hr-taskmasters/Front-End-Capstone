import React from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js'
// import testData from './testData.js';
import List from './Components/List.jsx';

class RatingAndReviews extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: {}
    }
    this.getReviews = this.getReviews.bind(this);
    
  }

  componentDidMount() {
    this.getReviews();
  }


  getReviews() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/?product_id=42366`, {
      headers: {
        'Authorization': `${API_KEY}`
      },
    })
    .then((response) => {
      this.setState({
        reviews: response.data
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <List reviews={this.state.reviews}/>
      
        <button>More Reviews</button>
      </div>
    )
  }
}

export default RatingAndReviews;


//ideas//

//getReviews={this.getReviews}

// this.getReviews().then(response =>{
    //   this.setState({
    //     reviews: response.data
    //   })
    // })