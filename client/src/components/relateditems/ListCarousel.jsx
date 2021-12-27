import React from 'react';
import ProductCard from './ProductCard.jsx';

// sample data
import getProducts from './data/sampleDataProducts.js';

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
    getProducts.map((product, index) => {
      grid.push(<div className="carouselItem" key={index}><ProductCard product={product} ratings={this.props.rating}/></div>)
    })
    this.setState({
      grid: grid
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
          {!Array.isArray(this.props.items) ? 'Loading...' : this.state.grid}
          </div>
          <div className="moveLeft slideButton" onClick={this.scrollLeft}>{'<'}</div>
          <div className="moveRight slideButton" onClick={this.scrollRight}>{'>'}</div>
        </div>
      </div>
    )
  }
}

export default ListCarousel;