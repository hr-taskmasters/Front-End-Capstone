import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListCarousel from './ListCarousel.jsx';
import API_KEY from '../../config/config.js';

//sample data
// import relatedItems from './data/sampleDataRelatedItems.js';

function RelatedItems(props) {

  const [relatedItems, setRelated] = useState([]);

  useEffect(() => {
    if(props.productid){
      getRelatedItems(props.productid);
    }

  }, [props.productid])

  const getRelatedItems = (productid) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productid}/related`, {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then((relItems) => {
      setRelated(relItems.data)
    })
    .catch((err) => {
      return;
    })
  }

  return (
    <div>
      <div>RELATED PRODUCTS</div>
      <div>
        {relatedItems[0] ? <ListCarousel items={relatedItems} chooseProduct={props.chooseProduct}/> : 'Loading...'}
      </div>
      <div>YOUR OUTFIT</div>
      <div>
        {/* <ListCarousel items={getProducts} /> */}
      </div>
    </div>
  )
}

export default RelatedItems;