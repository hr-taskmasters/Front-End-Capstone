import React from 'react';
import ProductDetails from './productdetails/ProductDetails.jsx';
import axios from 'axios';
import RelatedItems from './relateditems/RelatedItems.jsx';
import QuestionsAndAnswers from './questionsandanswers/QuestionsAndAnswers.jsx';
import RatingAndReviews from './ratingandreviews/RatingAndReviews.jsx';
import API_KEY from '../config/config.js';
import withClick from './withClick.jsx';

const ProductDetailsWithClick = withClick(ProductDetails);
const RelatedItemsWithClick = withClick(RelatedItems);
const QuestionsAndAnswersWithClick = withClick(QuestionsAndAnswers);
const RatingAndReviewsWithClick = withClick(RatingAndReviews);

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      product: {
        "id": 42366,
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
      },
      metaData: {}
    }
    this.getProductViaId = this.getProductViaId.bind(this);
    this.getReviewsMeta = this.getReviewsMeta.bind(this);
  }

  componentDidMount(){
    this.getProductViaId(42366);    //placeholder number
    this.getReviewsMeta(42366);
  }

  getProductViaId (id) { //  /products/:product_id
    if(window.localStorage[id]){
      this.setState({
        product: JSON.parse(window.localStorage[id])
      })
    } else {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${id}`, {
        headers: {
          'Authorization': `${API_KEY}`
        }
      })
      .then(response => {
        window.localStorage[id] = JSON.stringify(response.data);
        this.setState({
          product: response.data
        })
      })
      .catch(err => {
        console.error(err);
      })
    }
  }

  getReviewsMeta (id) { //  /reviews/meta
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta/?product_id=${id}`, {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then(response => {
      this.setState({
        ratings: response.data.ratings,
        metaData: response.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render () {
    return (
      <div id="main-app-container">
        <ProductDetailsWithClick product={this.state.product} ratings={this.state.ratings}/>
        <RelatedItemsWithClick productid={this.state.product.id} featuredProd={this.state.product} chooseProduct={this.getProductViaId}/>
        <QuestionsAndAnswersWithClick product={this.state.product}/>
        <RatingAndReviewsWithClick product={this.state.product} metaData={this.state.metaData}/>
      </div>
    )
  }
}

export default App;
