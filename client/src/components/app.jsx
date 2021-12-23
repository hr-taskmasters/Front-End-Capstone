import React from 'react';
import ProductDetails from './productdetails/ProductDetails.jsx';
import axios from 'axios';
import RelatedItems from './relateditems/RelatedItems.jsx';
import QuestionsAndAnswers from './questionsandanswers/QuestionsAndAnswers.jsx';
import RatingAndReviews from './ratingandreviews/RatingAndReviews.jsx';
import API_KEY from '../config/config.js';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      products: []
    }
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/?count=30', {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then((response) => {
      this.setState({
        products: response.data
      })
    }).catch((err) => {
      console.log(err);
    })
  }


  render () {
    return (
      <div>
        <ProductDetails />
        <RelatedItems />
        <QuestionsAndAnswers />
        <RatingAndReviews />
      </div>
    )
  }
}

export default App;