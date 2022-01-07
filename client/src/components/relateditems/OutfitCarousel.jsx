import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import API_KEY from '../../config/config.js';

// sample data
// import getProducts from './data/sampleDataProducts.js';

function OutfitCarousel(props) {

  const [grid, setGrid] = useState([]);
  const [pos, setPos] = useState(0);
  let scrollPos = pos;
  const scrollDistance = 320;
  const [leftButton, setLButton] = useState(' ');
  const [rightButton, setRButton] = useState('>');

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
    setPos(scrollPos);
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

  const resetPos = () => {
    setPos(0);
  }

  return (
    <div className='carousel' key={props.uniqueid + 'outfit'}>
      <div className='carouselContainer'>
        <div className="carouselBox">
        <div className="carouselItem">
          <Card style={{width: '18rem', backgroundColor: 'beige'}} id='addToCloset' onClick={() => {
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
            <div className="carouselItem" key={index} onClick={() => {
              window.scrollTo({
                top: 0
              });
            }}>
              <ProductCard key={product.id} product={product} featuredProd={props.featuredProd} icon='remove' checkPos={checkPos} removeOutfit={props.removeOutfit} chooseProduct={props.chooseProduct} resetPos={resetPos} uniqueid={props.uniqueid}/>
            </div>
          ))}
        </div>
        <div className="moveLeft slideButton" onClick={scrollLeft} id="outfitLeft">{leftButton}</div>
        <div className="moveRight slideButton" onClick={scrollRight} id="outfitRight">{rightButton}</div>
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