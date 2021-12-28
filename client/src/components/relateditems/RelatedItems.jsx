import React from 'react';
import axios from 'axios';
import ListCarousel from './ListCarousel.jsx';
import API_KEY from '../../config/config.js';

//sample data
// import relatedItems from './data/sampleDataRelatedItems.js';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedItems: []
    }
    this.findRelatedItems.bind(this);
  }

  componentDidMount(){
    this.findRelatedItems();
  }

  findRelatedItems() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${this.props.productid}/related`, {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then((relItems) => {
      this.setState({
        relatedItems: relItems.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    const { relatedItems } = this.state;

    return (
      <div>
        <div>RELATED PRODUCTS</div>
        <div>
          {relatedItems.length > 0 ? <ListCarousel items={relatedItems}/> : 'Loading...'}
        </div>
        <div>YOUR OUTFIT</div>
        <div>
          {/* <ListCarousel items={getProducts} /> */}
        </div>
      </div>
    )
  }
}

export default RelatedItems;