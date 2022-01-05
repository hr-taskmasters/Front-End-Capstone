import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Thumbnail from '../../client/src/components/productdetails/Thumbnail.jsx';

test('renders Thumbnail component correctly', () => {
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
  const styleNum = 0;
  const thumbnail = renderer.create(<Thumbnail style={style} styleNum={styleNum} />).toJSON();
  expect(thumbnail).toMatchSnapshot();
});