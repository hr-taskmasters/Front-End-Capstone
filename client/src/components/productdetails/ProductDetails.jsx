import React, {useState, useEffect} from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js';
import Navbar from './Navbar.jsx';
import ProductInfo from './ProductInfo.jsx';

function ProductDetails(props) {

  const [info, setInfo] = useState({
    id: 0,
    campus: '',
    name: '',
    slogan: '',
    description: '',
    category: '',
    default_price: '',
    created_at: '',
    updated_at: '',
    features: []
  });

  const [style, setStyle] = useState({
    product_id: 0,
    results: []
  });

  const [cart, setCart] = useState([]);

  useEffect(() => {
    getInfo();
    getStyle();
    getCartInfo();
  }, []);

  const getInfo = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/42366', {
      headers: {
        'Authorization': `${API_KEY}`
      }
    })
    .then(response => {
      setInfo(response.data);
    })
    .catch(err => {
      console.error(err);
    })
  }

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

  return (
    <div>
      <Navbar />
      <ProductInfo info={info} style={style.results} />
    </div>
  )
}

export default ProductDetails;