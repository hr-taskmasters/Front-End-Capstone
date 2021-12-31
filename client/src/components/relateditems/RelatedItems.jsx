import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListCarousel from './ListCarousel.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';
import API_KEY from '../../config/config.js';

//sample data
// import relatedItems from './data/sampleDataRelatedItems.js';

function RelatedItems(props) {

  const [relatedItems, setRelated] = useState([]);
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    if(props.productid){
      getRelatedItems(props.productid);
    }
    getYourOutfits();
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

  const getYourOutfits = () => { // fecCloset should be a stringified array of product objects
    if(window.localStorage.fecCloset === undefined) {
      window.localStorage.setItem('fecCloset', JSON.stringify(outfits))
    }
    setOutfits(JSON.parse(window.localStorage.fecCloset));
  }

  const removeOutfit = (product) => {
    let closet = JSON.parse(window.localStorage.fecCloset);
    let index = closet.findIndex(i => i.id === product.id)
    closet.splice((index), 1);
    window.localStorage.setItem('fecCloset', JSON.stringify(closet));

    setOutfits(JSON.parse(window.localStorage.fecCloset))
  }

  return (
    <div className='relatedProducts'>
      <div className='carouselTitle'>RELATED PRODUCTS</div>
      <div>
        {relatedItems[0] ? <ListCarousel items={relatedItems} chooseProduct={props.chooseProduct} featuredProd={props.featuredProd} uniqueid={props.productid}/> : 'Loading...'}
      </div>
      <div className='carouselTitle'>YOUR OUTFIT</div>
      <div>
        <OutfitCarousel outfits={outfits} getYourOutfits={getYourOutfits} removeOutfit={removeOutfit} featuredProd={props.featuredProd} chooseProduct={props.chooseProduct} uniqueid={props.productid} />
      </div>
    </div>
  )
}

export default RelatedItems;