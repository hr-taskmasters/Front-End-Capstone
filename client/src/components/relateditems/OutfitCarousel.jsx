import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';
import API_KEY from '../../config/config.js';

// sample data
// import getProducts from './data/sampleDataProducts.js';

function OutfitCarousel(props) {

  const [grid, setGrid] = useState([]);
  let scrollPos = 0;
  let scrollDistance = 320;

  useEffect(() => {
    populateCarousel();
  }, [props.items]);

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
          if (grid.length === props.items.length) {
            setGrid(grid);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const checkPos = (width) => {
    let leftButton = document.getElementById(props.uniqueid + 'left');
    let rightButton = document.getElementById(props.uniqueid + 'right');
    if (scrollPos <= 0) {
      scrollPos = 0;
      leftButton.innerHTML = ' ';
    } else {
      leftButton.innerHTML = '<';
    }
    if (scrollPos >= width) {
      rightButton.innerHTML = ' ';
    } else {
      rightButton.innerHTML = '>';
    }
  };

  const scrollLeft = (e) => {
    let element = e.target.parentElement.firstElementChild; // div w/ class carouselBox    console.log(element)
    element.scrollTo({
      top: 0,
      left: (scrollPos -= scrollDistance),
      behavior: 'smooth'
    });
    checkPos();
  };

  const scrollRight = (e) => {
    let element = e.target.parentElement.firstElementChild;
    if (scrollPos <= element.scrollWidth - element.clientWidth) {
      element.scrollTo({
        top: 0,
        left: (scrollPos += scrollDistance),
        behavior: 'smooth'
      });
    }
    checkPos((element.scrollWidth - element.clientWidth));
  };

  return (
    <div className='carousel'>
      <div className='carouselContainer'>
        <div className="carouselBox">
          {grid.length === 0 ? 'Loading...' : grid.map((product, index) => (
            <div className="carouselItem" key={index}><ProductCard product={product} chooseProduct={props.chooseProduct} uniqueid={props.uniqueid}/></div>
          ))}
        </div>
        <div className="moveLeft slideButton" onClick={scrollLeft} id={props.uniqueid + 'left'}>{' '}</div>
        <div className="moveRight slideButton" onClick={scrollRight} id={props.uniqueid + 'right'}>{'>'}</div>
      </div>
    </div>
  );
}

export default OutfitCarousel;