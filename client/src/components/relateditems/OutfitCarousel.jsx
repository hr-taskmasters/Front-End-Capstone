import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import API_KEY from '../../config/config.js';

// sample data
// import getProducts from './data/sampleDataProducts.js';

function OutfitCarousel(props) {

  const [grid, setGrid] = useState([]);
  let scrollPos = 0;
  let scrollDistance = 320;

  useEffect(() => {
    getOutfits();
  }, [props.outfits]);

  const getOutfits = () => {
    setGrid(props.outfits)
  };

  const checkPos = (width) => {
    let leftButton = document.getElementById('outfitLeft');
    let rightButton = document.getElementById('outfitRight');
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
        <div className="carouselItem">
          <Card style={{width: '18rem', backgroundColor: 'beige'}} onClick={() => {
            let duplicateOutfit = false;
            let currentOutfits = JSON.parse(window.localStorage.fecCloset);
            for(let i = 0; i < currentOutfits.length; i++) {
              if(currentOutfits[i].id === props.featuredProd.id){
                duplicateOutfit = true;
              }
            }
            if(!duplicateOutfit) {
              let newList = [...currentOutfits, props.featuredProd];
              window.localStorage.setItem('fecCloset', JSON.stringify(newList));
              props.getYourOutfits();
            } else {
              alert("Item is already in your outfit list!")
            }
          }}>
            <Card.Img variant="top" src={'images/plus-icon-vector.jpeg'} style={styles.cardImage}/>
            <Card.Body style={styles.cardText}>
              <Card.Title>ADD TO YOUR OUTFITS</Card.Title>
            </Card.Body>
          </Card>
        </div>
          {grid.length === 0 ? '' : grid.map((product, index) => (
            <div className="carouselItem" key={index}><ProductCard product={product} chooseProduct={props.chooseProduct} uniqueid={props.uniqueid}/></div>
          ))}
        </div>
        <div className="moveLeft slideButton" onClick={scrollLeft} id="outfitLeft">{' '}</div>
        <div className="moveRight slideButton" onClick={scrollRight} id="outfitRight">{'>'}</div>
      </div>
    </div>
  );
}

export default OutfitCarousel;

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