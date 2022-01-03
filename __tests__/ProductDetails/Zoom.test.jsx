import React from 'react';
import renderer from 'react-test-renderer';
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