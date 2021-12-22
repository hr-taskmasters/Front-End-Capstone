import React from 'react';
import ProductDetails from './productdetails/ProductDetails.jsx';
import RelatedItems from './relateditems/RelatedItems.jsx';
import QuestionsAndAnswers from './questionsandanswers/QuestionsAndAnswers.jsx';
import RatingAndReviews from './ratingandreviews/RatingAndReviews.jsx';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      temp: 'temp'
    }
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