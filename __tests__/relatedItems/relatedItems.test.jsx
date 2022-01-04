import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedItems from '../../client/src/components/relateditems/RelatedItems.jsx';
import ListCarousel from '../../client/src/components/relateditems/ListCarousel.jsx';
import OutfitCarousel from '../../client/src/components/relateditems/OutfitCarousel.jsx';

Enzyme.configure({ adapter: new Adapter() });

const relatedItems = [];
let component;

beforeEach(async () => {
  component = mount(<RelatedItems
    productid={42366}
    featuredProd={{
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
    }}
    chooseProduct={jest.fn()}
  />);
})

test('Renders List Carousel', () => {
  const carousel1 = component.find('ListCarousel');
  const c1Exists = carousel1.exists();

  expect(c1Exists).toBe(true);
})

test('Renders Outfit Carousel', () => {
  const carousel2 = component.find('OutfitCarousel');
  const c2Exists = carousel2.exists();

  expect(c2Exists).toBe(true);
})

test('ListCarousel gets correct props', () => {
  const subcomponent = component.find('ListCarousel')

  expect(subcomponent).toHaveProp('items');
})

test('OutfitCarousel gets correct props', () => {
  const subcomponent = component.find('OutfitCarousel')

  expect(subcomponent).toHaveProp('outfits');
})