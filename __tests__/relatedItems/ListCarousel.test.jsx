import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListCarousel from '../../client/src/components/relateditems/ListCarousel.jsx';
import ProductCard from '../../client/src/components/relateditems/ProductCard.jsx';

Enzyme.configure({ adapter: new Adapter() });

let component;

beforeEach(() => {
  component = mount(<ListCarousel
    items={[
      42367,
      42368,
      42373,
      42372
    ]}
    chooseProduct={() => {jest.fn()}}
    featuredProd={{
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
    }
  }
    uniqueid={42367}/>)
})

test('carousel renders', () => {
  expect(component).toContainExactlyOneMatchingElement('.carousel');
})

test('renders carousel items', () => {

  expect(component).toHaveProp('items');
})

test('carousel private functions get called', () => {
  window.HTMLElement.prototype.scrollTo = jest.fn();
  component.find('#listRight').simulate('click');
  expect(window.HTMLElement.prototype.scrollTo.mock.calls.length).toBe(1);
  component.find('#listLeft').simulate('click');
  expect(window.HTMLElement.prototype.scrollTo.mock.calls.length).toBe(2);
})