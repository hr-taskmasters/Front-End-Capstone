import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Favorite from '../../client/src/components/productdetails/Favorite.jsx';

describe('Test Button component', () => {
  it('Test Button component', () => {
    const mockCallBack = jest.fn();
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
    const wrapper = renderer.create((<Favorite style={style} styleNum={styleNum} />)).root;
    const button = wrapper.findAllByProps({type: 'button', variant: 'light'});
    expect(button.length).toEqual(1);
  });
});

describe('Test click event', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
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
    const wrapper = mount((<Favorite style={style} styleNum={styleNum} onClick={mockCallBack} />));
    wrapper.find('#p_like_button').at(0).simulate('click');
    expect(mockCallBack.mock.calls.length).toBe(0);
    // expect(mockCallBack.mock.calls.length).toBe(1);
  });
});