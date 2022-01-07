import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Cart from '../../client/src/components/productdetails/Cart.jsx';

test('renders Cart component correctly', () => {
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
  const cart = renderer.create(<Cart style={style} styleNum={styleNum} />).toJSON();
  expect(cart).toMatchSnapshot();
});

test('Renders the status component', ()=> {
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
  const wrapper = shallow(<Cart styleNum={styleNum} style={style} />);
  expect(wrapper).toContainMatchingElements(2,'select');
  expect(wrapper).toContainMatchingElements(8,'option');
})