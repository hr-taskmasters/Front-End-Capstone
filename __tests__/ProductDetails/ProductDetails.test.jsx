import React from 'react';
import Enzyme, { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import ProductDetails from '../../client/src/components/productdetails/ProductDetails.jsx';

const relatedItems = [];

test('Renders no item', () => {
  const wrapper = mount(<ProductDetails product={{}} />);
  expect(wrapper).toHaveProp({product: {}});
})


describe('<ProductDetails />', () => {
  const setState = jest.fn();
  const useStateMock = () => [initState, setState];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Is a test where we want to mock useState', () => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const wrapper = shallow(<ProductDetails product={{id: 42366,
          campus: "hr-lax",
          name: "Camo Onesie",
          slogan: "Blend in to your crowd",
          updated_at: "2021-08-13T14:39:39.968Z",
          category: "Jackets",
          created_at: "2021-08-13T14:39:39.968Z",
          default_price: "140.00",
          description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
         }} ratings={{}} />);
        expect(setState).toHaveBeenCalledTimes(0);
  });
});

