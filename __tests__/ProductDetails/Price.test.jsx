import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Price from '../../client/src/components/productdetails/Price.jsx';

test('Renders price component without discount', ()=> {
  const style = [{
    style_id: 253620,
    name: 'Forest Green & Black',
    original_price: '140.00',
    sale_price: null
  }]
  const styleNum = 0;
  const wrapper = mount(<Price style={style} styleNum={styleNum} />);
  expect(wrapper).toContainMatchingElements(0,'span')
})

test('Renders price component with discount', ()=> {
  const style = [{
    style_id: 253620,
    name: 'Forest Green & Black',
    original_price: '140.00',
    sale_price: '100.00'
  }]
  const styleNum = 0;
  const wrapper = mount(<Price style={style} styleNum={styleNum} />);
  expect(wrapper).toContainMatchingElements(1,'span')
})