import React from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';
import API_KEY from '../../config/config.js';

// sample data
// import getProducts from './data/sampleDataProducts.js';

class ListCarousel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      grid: []
    }

    this.populateCarousel = this.populateCarousel.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this. scrollRight.bind(this);
  }
  scrollPos = 0;
  scrollDistance = 320;

  componentDidMount() {
    this.populateCarousel();
  }

  populateCarousel () {
    let grid = [];
    this.props.items.map((productid) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productid}`, {
        headers: {
          'Authorization': `${API_KEY}`
        }
      })
      .then((result) => {
        grid.push(result.data);
        this.setState({
          grid: grid
        })
      })
      .catch((err) => {
        console.log(err);
      })
    })
  }

  scrollLeft (e) {
    let element = e.target.parentElement.firstElementChild;
    element.scrollTo({
      top: 0,
      left: (this.scrollPos -= this.scrollDistance),
      behavior: "smooth"
    })

    if(this.scrollPos < 0){
      this.scrollPos = 0;
    }
  }

  scrollRight (e) {
    let element = e.target.parentElement.firstElementChild;
    if(this.scrollPos <= element.scrollWidth - element.clientWidth) {
      element.scrollTo({
        top: 0,
        left: (this.scrollPos += this.scrollDistance),
        behavior: "smooth"
      })
    }
  }

  render() {
    return (
      <div className='carousel'>
        <div className='carouselContainer'>
          <div className="carouselBox">
          {this.state.grid.length === 0 ? 'Loading...' : this.state.grid.map((product, index) => (
            <div className="carouselItem" key={index}><ProductCard product={product}/></div>
          ))}
          </div>
          <div className="moveLeft slideButton" onClick={this.scrollLeft}>{'<'}</div>
          <div className="moveRight slideButton" onClick={this.scrollRight}>{'>'}</div>
        </div>
      </div>
    )
  }
}

export default ListCarousel;