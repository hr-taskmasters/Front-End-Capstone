import React from 'react';
import renderer from 'react-test-renderer';
import Cart from '../../client/src/components/productdetails/Cart.jsx';

describe('Add to cart', () => {
  it('Submit button exists', () => {
    const style = [
      {
        style_id: 253620,
        name: "Forest Green & Black",
        original_price: "140.00",
        skus: {
          1471554: {quantity: 8, size: 'XS'},
          1471555: {quantity: 16, size: 'S'},
          1471556: {quantity: 17, size: 'M'},
          1471557: {quantity: 10, size: 'L'},
          1471558: {quantity: 15, size: 'XL'},
          1471559: {quantity: 4, size: 'XL'}
        }
      }
    ];
    const styleNum = 0;

    const testAddToCart = renderer.create((
      <Cart style={style} styleNum={styleNum} />
    )).root;

    const submitButtonInstance = testAddToCart.findAllByProps({
      type: 'button',
      variant: 'dark'
    });
    expect(submitButtonInstance.length).toEqual(1);
  })
})