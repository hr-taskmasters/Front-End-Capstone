import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OutfitCarousel from '../../client/src/components/relateditems/OutfitCarousel.jsx';

Enzyme.configure({ adapter: new Adapter() });

const relatedItems = [];

test('', () => {
  const wrapper = mount(<RelatedItems productid={null} featuredProd={{}} chooseProduct={{}}/>);
  expect(wrapper).toHaveProp({relatedItems: []});
})