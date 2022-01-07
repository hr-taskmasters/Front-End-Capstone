import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
import ProductCard from '../../client/src/components/relateditems/ProductCard.jsx';

Enzyme.configure({ adapter: new Adapter() });

let product;
let featuredProd;
let card;
const checkPosMock= jest.fn();
const chooseProductMock = jest.fn();
const resetPosMock = jest.fn();

beforeEach(async () => {
  product = {
    id: 42366,
    campus: "hr-lax",
    name: "Camo Onesie",
    slogan: "Blend in to your crowd",
    description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    category: "Jackets",
    default_price: "140.00",
    created_at: "2021-08-13T14:39:39.968Z",
    updated_at: "2021-08-13T14:39:39.968Z",
    features: [
      {
        feature: "Fabric",
        value: "Canvas"
      },
      {
        feature: "Buttons",
        value: "Brass"
      }
    ]
  };

  featuredProd = {
    id: 42367,
    campus: "hr-lax",
    name: "Bright Future Sunglasses",
    slogan: "You've got to wear shades",
    description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    category: "Accessories",
    default_price: "69.00",
    created_at: "2021-08-13T14:39:39.968Z",
    updated_at: "2021-08-13T14:39:39.968Z",
    features: [
      {
        "feature": "Lenses",
        "value": "Ultrasheen"
      },
      {
        "feature": "UV Protection",
        "value": null
      },
      {
        "feature": "Frames",
        "value": "LightCompose"
      }
    ]
  };

  card = mount(<ProductCard
    product={product}
    featuredProd={featuredProd}
    icon='remove'
    checkPos={checkPosMock}
    removeOutfit={() => {}}
    chooseProduct={chooseProductMock}
    resetPos={resetPosMock}
    uniqueid='42366'
  />);
})


test('renders Product Card component correctly', () => {
  const component = card.find('.card');

  expect(component).toExist();
})

test('click works', () => {
  const component = card.find('.card');
  card.simulate('click');

  expect(checkPosMock.mock.calls.length).toBe(1);
  expect(chooseProductMock.mock.calls.length).toBe(1);
})