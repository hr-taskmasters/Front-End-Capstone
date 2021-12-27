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
  scrollDistance = 400;

  componentDidMount() {
    this.populateCarousel();
  }

  populateCarousel () {
    let grid = [];
    getProducts.map((product, index) => {
      grid.push(<div className="carouselItem" key={index}>{product.name}</div>)
    })
    this.setState({
      grid: grid
    })
  }

  scrollLeft () {
    document.querySelector('.carouselBox').scrollTo({
      top: 0,
      left: (this.scrollPos -= this.scrollDistance),
      behavior: "smooth"
    })

    if(this.scrollPos < 0){
      this.scrollPos = 0;
    }
  }

  scrollRight () {
    if(this.scrollPos <= document.querySelector('.carouselBox').scrollWidth - document.querySelector('.carouselBox').clientWidth) {
      document.querySelector('.carouselBox').scrollTo({
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