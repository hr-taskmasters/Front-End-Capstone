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

describe('Customer cannot add the item to the cart without selecting the size and quantity', () => {
  let wrapper;
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
  beforeEach(() => {
    wrapper = mount(<Cart style={style} styleNum={styleNum} />);
  });

  it('calls AddToCart function when dropdown button is not clicked', () => {
    const incButton = wrapper.find('AddToCart');
    incButton.simulate('click');
    expect(wrapper.find('.p_notice')).toExist();
  });
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

describe('Quantity will show up only when size has been selected', () => {
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
  const wrapper = mount(<Cart style={style} styleNum={styleNum} />);
  wrapper.find('.p_select').at(0).simulate('change', {
    target: { value: 'M' }
  });
  expect(wrapper).toContainMatchingElements(22,'option');
});

describe('Customer can add the item to cart if size and quantity have been selected', () => {
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
  const wrapper = mount(<Cart style={style} styleNum={styleNum} />);
  wrapper.find('.p_select').at(0).simulate('change', {
    target: { value: 'M' }
  });
  wrapper.find('.p_select').at(1).simulate('change', {
    target: { value: 3 }
  });
  const incButton = wrapper.find('AddToCart');
  incButton.simulate('click');
  expect(wrapper.find('.p_notice')).toHaveLength(0);
});