import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedItems from '../client/components/relateditems/RelatedItems.jsx';

Enzyme.configure({ adapter: new Adapter() });

const relatedItems = [];

test('Renders no carousel', () => {
  const wrapper = mount(<RelatedItems items={[]} chooseProduct={() => {return 0}}/>);
  expect(wrapper).toHaveState({relatedItems: []});
})