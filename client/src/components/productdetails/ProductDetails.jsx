import React, {useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js';
import Navbar from './Navbar.jsx';
import ProductInfo from './ProductInfo.jsx';

function ProductDetails(props) {

  const [style, setStyle] = useState({
    product_id: 0,
    results: []
  });

  const [cart, setCart] = useState([]);

  const [ratings, setRatings] = useState({});

  useEffect(() => {
    getStyle();
    getCartInfo();
    getReviewsMeta();
  }, []);

  const getStyle = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/42366/styles', {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then(response => {
      setStyle(response.data);
    })
    .catch(err => {
      console.error(err);
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

  const getReviewsMeta = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta/?product_id=42366', {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then(response => {
      setRatings(response.data.ratings);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <Navbar />
      <ProductInfo info={props.product} style={style.results} ratings={ratings}/>
    </div>
  )
}

export default ProductDetails;