import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import AddToCart from '../../client/src/components/productdetails/AddToCart.jsx';

describe('Add to cart', () => {
  it('Submit button exists', () => {
    const testAddToCart = renderer.create((
      <AddToCart />
    )).root;

    const submitButtonInstance = testAddToCart.findAllByProps({
      type: 'button',
      variant: 'dark'
    });
    expect(submitButtonInstance.length).toEqual(1);
  })
})

test('renders AddToCart component correctly', () => {
  const addToCart = renderer.create(<AddToCart />).toJSON();
  expect(addToCart).toMatchSnapshot();
});
