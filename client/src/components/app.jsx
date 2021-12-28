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
      product: {
        "id": null,
        "campus": '',
        "name": '',
        "slogan": '',
        "description": '',
        "category": '',
        "default_price": '',
        "created_at": '',
        "updated_at": ''
      },
      ratings: {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": ""
      }
    }
    this.getProductViaId = this.getProductViaId.bind(this);
    this.getReviewsMeta = this.getReviewsMeta.bind(this);
  }

  componentDidMount(){
    this.getProductViaId(42366);    //placeholder number
    this.getReviewsMeta(42366);
  }

  getProductViaId (id) { //  /products/:product_id
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${id}`, {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then(response => {
      this.setState({
        product: response.data
      })
    })
    .catch(err => {
      console.error(err);
    })
  }

  getReviewsMeta (id) { //  /reviews/meta
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta/?product_id=${id}`, {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then(response => {
      this.setState({
        ratings: response.data.ratings
      })
    })
    .catch(err => {
      console.log(err);
    })
  }


  render () {
    return (
      <div>
        {/* <ProductDetails product={this.state.product} ratings={this.state.ratings}/> */}
        {/* <RelatedItems product={this.state.product} ratings={this.state.ratings}/> */}
        {/* <QuestionsAndAnswers product={this.state.product}/> */}
        <RatingAndReviews />
      </div>
    )
  }
}

export default App;
