import React, {useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js';
import Navbar from './Navbar.jsx';
import ProductInfo from './ProductInfo.jsx';

function ProductDetails(props) {

  const [id, setId] = useState(42366);
  useEffect(() => {
    setId(props.product.id)
  }, [props])

  const [style, setStyle] = useState({
    product_id: 0,
    results: []
  });

  const [cart, setCart] = useState([]);

  const [ratings, setRatings] = useState({});

  useEffect(() => {
    getStyle(id);
    getCartInfo();
    getReviewsMeta(id);
  }, [id]);

  const getStyle = (id) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${id}/styles`, {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then(response => {
      setStyle(response.data);
    })
    .catch(err => {
      return;
    })
  }

  const getCartInfo = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/cart', {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then(response => {
      setCart(response.data);
    })
    .catch(err => {
      console.error(err);
    })
  }

  const getReviewsMeta = (id) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta/?product_id=${id}`, {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then(response => {
      setRatings(response.data.ratings);
    })
    .catch(err => {
      return;
    })
  }

  return (
    <div>
      <Navbar />
      <div className='p_announcement'>SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE / DISCOUNT <span className='p_offer'>OFFER</span> -- <span className='p_highlight'>NEW PRODUCT HIGHLIGHT</span></div>
      <ProductInfo info={props.product} style={style.results} ratings={ratings}/>
    </div>
  )
}

export default ProductDetails;