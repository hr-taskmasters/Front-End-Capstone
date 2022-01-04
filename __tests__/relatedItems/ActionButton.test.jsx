import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
import ActionButton from '../../client/src/components/relateditems/ActionButton.jsx';
import Modal from 'react-bootstrap/Modal';


Enzyme.configure({ adapter: new Adapter() });

const relatedItems = [];

test('renders as X button type', () => {
  const wrapper = mount(<ActionButton icon='notstar' removeOutfit={()=>{}} product={{}} featuredProd={{}} />);
  expect(wrapper).toContainMatchingElement('.fa-times-circle');
})

test('renders as star button type', () => {
  const wrapper = mount(<ActionButton icon='star' removeOutfit={()=>{}} product={{}} featuredProd={{}} />);
  expect(wrapper).toContainMatchingElement('.fa-star');
})

test('modal opens on click', () => {
  const wrapper = mount(<ActionButton icon='star' removeOutfit={()=>{}} product={{}} featuredProd={{}} />);
  wrapper.find('.actionButton').simulate('click');
  const subcomponent = wrapper.find('.compareModal');

  expect(subcomponent).toExist();
})

test('modal does not yet exist', () => {
  const wrapper = mount(<ActionButton icon='star' removeOutfit={()=>{}} product={{}} featuredProd={{}} />);
  const subcomponent = wrapper.find('.compareModal');

  expect(subcomponent).not.toExist();
})

test('card is removable', () => {
  const mockFn = jest.fn();
  const wrapper = mount(<ActionButton icon='X' removeOutfit={mockFn} product={{}} featuredProd={{}} />);
  wrapper.find('.actionButton').simulate('click');

  expect(mockFn.mock.calls.length).toBe(1);
})