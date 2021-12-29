import React, { useState, useEffect } from 'react';
import ActionButton from './ActionButton.jsx';
import axios from 'axios';
import API_KEY from '../../config/config.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productid: this.props.product.id,
      category: this.props.product.category.toUpperCase(),
      imageUrl: '',
      // styleCall.results[0].photos[0].thumbnail_url;
      expandedProductName: this.props.product.name + ' - ' + this.props.product.slogan,
      price: this.props.product.default_price,
      rating: 'FIVE STARS'
    }
  }

  componentDidMount(){
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${this.props.product.id}/styles`, {
    headers: {
      'Authorization': `${API_KEY}`
      }
    })
    .then((product) => (
      this.setState({
        imageUrl: product.data.results[0].photos[0].thumbnail_url
      })
    ))
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const { chooseProduct } = this.props;
    const { productid } = this.state;

    return (
      <Card style={{width: '18rem'}} onClick={() => {chooseProduct(productid)}}>
        <Card.Img variant="top" src={this.state.imageUrl} style={styles.cardImage}/>
        <ActionButton />
        <Card.Body>
          <Card.Text>{this.state.category}</Card.Text>
          <Card.Title>{this.state.expandedProductName}</Card.Title>
          <Card.Text>${this.state.price}</Card.Text>
          <Card.Text>{this.state.rating}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default ProductCard;

const styles = {
  cardImage: {
    maxWidth: '100%',
    height: '300px',
    overflow: 'hidden'
  },
  cardText: {

  }
}