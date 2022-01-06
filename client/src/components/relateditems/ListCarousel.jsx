import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';
import API_KEY from '../../config/config.js';

// sample data
// import getProducts from './data/sampleDataProducts.js';

function ListCarousel(props) {

  const [grid, setGrid] = useState([]);
  let scrollPos = 0;
  const scrollDistance = 320;
  const [leftButton, setLButton] = useState(' ');
  const [rightButton, setRButton] = useState('>');

  useEffect(() => {
    populateCarousel();
  }, [props.items]);

  const populateCarousel = () => {
    let grid = [];
    props.items.map((productid) => {
      if(window.localStorage[productid]){
        grid.push(JSON.parse(window.localStorage[productid]));
        if (grid.length === props.items.length) {
          setGrid(grid);
        }
      } else {
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productid}`, {
          headers: {
            'Authorization': `${API_KEY}`
          }
        })
        .then((result) => {
          window.localStorage[productid] = JSON.stringify(result.data);
          grid.push(result.data);
          if (grid.length === props.items.length) {
            setGrid(grid);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
    });
  };

  const checkPos = (width) => {
    let leftButton = document.getElementById('listLeft');
    let rightButton = document.getElementById('listRight');
    if (scrollPos <= 0) {
      scrollPos = 0;
      if(leftButton !== ' ') {
        setLButton(' ')
      }
    } else {
      if(leftButton !== '<'){
        setLButton('<');
      }
    }
    if (scrollPos >= width) {
      if(rightButton !== ' ') {
        setRButton(' ')
      }
    } else {
      if(rightButton !== '>') {
        setRButton('>');
      }
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
    <div className='carousel' key={props.uniqueid + 'related'}>
      <div className='carouselContainer'>
        <div className="carouselBox">
          {grid.length === 0 ? 'Loading...' : grid.map((product, index) => (
            <div className="carouselItem"  onClick={() => {
              window.scrollTo({
                top: 0
              });
            }} key={index}><ProductCard product={product} featuredProd={props.featuredProd} icon='star' chooseProduct={props.chooseProduct} checkPos={checkPos} uniqueid={props.uniqueid}/></div>
          ))}
        </div>
        <div className="moveLeft slideButton" onClick={scrollLeft} id="listLeft">{leftButton}</div>
        <div className="moveRight slideButton" onClick={scrollRight} id="listRight">{rightButton}</div>
      </div>
    </div>
  );
}

export default ListCarousel;