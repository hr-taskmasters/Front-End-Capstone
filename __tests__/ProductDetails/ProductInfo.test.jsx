import React from 'react';
import Enzyme, { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import ProductInfo from '../../client/src/components/productdetails/ProductInfo.jsx';

test('Renders the status component', ()=> {
  const info = {
    id: 42366,
    campus: "hr-lax",
    name: "Camo Onesie",
    slogan: "Blend in to your crowd",
    updated_at: "2021-08-13T14:39:39.968Z",
    category: "Jackets",
    created_at: "2021-08-13T14:39:39.968Z",
    default_price: "140.00",
    description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings."
  }
  const ratings = {};
  const style = [{
    style_id: 253620,
    name: 'Forest Green & Black',
    original_price: '140.00',
    sale_price: null,
    photos: [{
      thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    }]
  }];
  const wrapper = shallow(<ProductInfo info={info} ratings={ratings} style={style} />);
  expect(wrapper).toContainExactlyOneMatchingElement('Image');
  expect(wrapper).toContainExactlyOneMatchingElement('Price');
  expect(wrapper).toContainExactlyOneMatchingElement('Thumbnail');
  expect(wrapper).toContainExactlyOneMatchingElement('Cart');
  expect(wrapper).toContainExactlyOneMatchingElement('Share');
})
