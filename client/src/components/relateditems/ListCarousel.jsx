import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';
import API_KEY from '../../config/config.js';

// sample data
// import getProducts from './data/sampleDataProducts.js';

function ListCarousel(props) {

  const [grid, setGrid] = useState([]);
  let scrollPos = 0;
  let scrollDistance = 320;

  useEffect(() => {
    populateCarousel();
  }, [props])

  const populateCarousel = () => {
    let grid = [];
    props.items.map((productid) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productid}`, {
        headers: {
          'Authorization': `${API_KEY}`
        }
      })
      .then((result) => {
        grid.push(result.data);
        setGrid(grid);
      })
      .catch((err) => {
        console.log(err);
      })
    })
  }

  const scrollLeft = (e) => {
    let element = e.target.parentElement.firstElementChild;
    element.scrollTo({
      top: 0,
      left: (scrollPos -= scrollDistance),
      behavior: "smooth"
    })

    if(scrollPos < 0){
      scrollPos = 0;
    }
  }

  const scrollRight = (e) => {
    let element = e.target.parentElement.firstElementChild;
    if(scrollPos <= element.scrollWidth - element.clientWidth) {
      element.scrollTo({
        top: 0,
        left: (scrollPos += scrollDistance),
        behavior: "smooth"
      })
    }
  }

  return (
    <div className='carousel'>
      <div className='carouselContainer'>
        <div className="carouselBox">
        {grid.length === 0 ? 'Loading...' : grid.map((product, index) => (
          <div className="carouselItem" key={index}><ProductCard product={product} chooseProduct={props.chooseProduct}/></div>
        ))}
        </div>
        <div className="moveLeft slideButton" onClick={scrollLeft}>{'<'}</div>
        <div className="moveRight slideButton" onClick={scrollRight}>{'>'}</div>
      </div>
    </div>
  )
}

export default ListCarousel;