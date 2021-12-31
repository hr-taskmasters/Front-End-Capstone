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
      rating: null
    }
  }

  componentDidMount(){
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${this.props.product.id}/styles`, {
    headers: {
      'Authorization': `${API_KEY}`
      }
    })
    .then((product) => {
      this.setState({
        imageUrl: product.data.results[0].photos[0].thumbnail_url
      })
    })
    .catch((err) => {
      console.log(err)
    })
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta/?product_id=${this.props.product.id}`, {
    headers: {
      'Authorization': `${API_KEY}`
      }
    })
    .then((meta) => {
      let star1 = meta.data.ratings[1] ? Number(meta.data.ratings[1]) : 0;
      let star2 = meta.data.ratings[2] ? Number(meta.data.ratings[2]) : 0;
      let star3 = meta.data.ratings[3] ? Number(meta.data.ratings[3]) : 0;
      let star4 = meta.data.ratings[4] ? Number(meta.data.ratings[4]) : 0;
      let star5 = meta.data.ratings[5] ? Number(meta.data.ratings[5]) : 0;
      let total = star1 + star2 + star3 + star4 + star5
      let rating = ((star1 * 1) + (star2 * 2) + (star3 * 3)+ (star4 * 4) + (star5 * 5)) / total;
      this.setState({
        rating: rating
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const { chooseProduct } = this.props;
    const { productid } = this.state;

    return (
      <Card style={{width: '18rem'}} onClick={() => {
        this.props.checkPos();
        this.props.chooseProduct(productid);
      }}>
        <Card.Img variant="top" src={this.state.imageUrl} style={styles.cardImage}/>
        <ActionButton icon={this.props.icon} removeOutfit={this.props.removeOutfit} product={this.props.product}/>
        <Card.Body style={styles.cardText}>
          <Card.Text style={styles.noMargin}>{this.state.category}</Card.Text>
          <Card.Title>{this.state.expandedProductName}</Card.Title>
          <Card.Text style={styles.noMargin}>${this.state.price}</Card.Text>
          <Card.Text style={styles.noMargin}>{this.state.rating}</Card.Text>
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
    whiteSpace: 'normal',
    textAlign: 'left'
  },
  noMargin: {
    marginBottom: 0
  }
}