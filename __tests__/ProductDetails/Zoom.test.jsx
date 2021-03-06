import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Zoom from '../../client/src/components/productdetails/Zoom.jsx';

test('renders Zoom component correctly', () => {
  const zoom = renderer.create(<Zoom
    img={`images/placeholder-image.png`}
    zoomScale={2.5}
    height={650}
    width={900}
    transitionTime={0.5}
  />).toJSON();
  expect(zoom).toMatchSnapshot();
});

describe('Test click event', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount((<Zoom
      img={`images/placeholder-image.png`}
      zoomScale={2.5}
      height={650}
      width={900}
      transitionTime={0.5}
      onClick={mockCallBack}
    />));
    wrapper.find('.p_pic_expanded_zoom').simulate('click');
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});

describe("handleMouseOver", () => {
  it("test handleMouseOver", () => {
    const wrapper = mount((<Zoom
      img={`images/placeholder-image.png`}
      zoomScale={2.5}
      height={650}
      width={900}
      transitionTime={0.5}
    />));
    const mockEvent = {};
    const expected = {
      zoom: true,
      mouseX: null,
      mouseY: null
    };
    wrapper.instance().handleMouseOver(mockEvent);

    expect(wrapper.state()).toEqual(expected);
  });
});

describe("handleMouseOut", () => {
  it("test handleMouseOut", () => {
    const wrapper = mount((<Zoom
      img={`images/placeholder-image.png`}
      zoomScale={2.5}
      height={650}
      width={900}
      transitionTime={0.5}
    />));
    const mockEvent = {};
    const expected = {
      zoom: false,
      mouseX: null,
      mouseY: null
    };
    wrapper.instance().handleMouseOut(mockEvent);

    expect(wrapper.state()).toEqual(expected);
  });
});
