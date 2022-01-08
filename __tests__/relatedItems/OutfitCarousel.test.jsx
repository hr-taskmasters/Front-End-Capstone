import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OutfitCarousel from '../../client/src/components/relateditems/OutfitCarousel.jsx';

Enzyme.configure({ adapter: new Adapter() });

let component;
let shallowComponent;

beforeEach(() => {
  component = mount(<OutfitCarousel
    outfits={[]}
    getYourOutfits={() => {jest.fn()}}
    removeOutfit={() => {jest.fn()}}
    chooseProduct={() => {jest.fn()}}
    featuredProd={prod}
    uniqueid={42367}/>)

})

test('carousel renders', () => {
  expect(component).toContainExactlyOneMatchingElement('.carousel');
})

test('renders carousel items', () => {

  expect(component).toHaveProp('outfits');
})

test('carousel private functions get called', () => {
  window.HTMLElement.prototype.scrollTo = jest.fn();
  component.find('#outfitRight').simulate('click');
  expect(window.HTMLElement.prototype.scrollTo.mock.calls.length).toBe(1);
  component.find('#outfitLeft').simulate('click');
  expect(window.HTMLElement.prototype.scrollTo.mock.calls.length).toBe(2);
})

test('includes addOutfit card', () => {
  shallowComponent = shallow(<OutfitCarousel
    outfits={[]}
    getYourOutfits={() => {jest.fn()}}
    removeOutfit={() => {jest.fn()}}
    chooseProduct={() => {jest.fn()}}
    featuredProd={prod}
    uniqueid={42367}/>)

  expect(shallowComponent).toContainExactlyOneMatchingElement('#addItemToTheCloset');
})

test('stores items into localStorage', () => {
  const setItemMock = jest.fn();
  window.localStorage.fecCloset = JSON.stringify([]);
  jest.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation(setItemMock);

  component.find('#addItemToTheCloset').first().simulate('click');
  expect(setItemMock.mock.calls.length).toBe(1);
})




const prod = {
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