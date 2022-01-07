import React from 'react';
import renderer from 'react-test-renderer';
import Feature from '../../client/src/components/productdetails/Feature.jsx';

test('renders Feature component correctly', () => {
  const feature = renderer.create(<Feature
    features={[{feature: 'Fabric', value: 'Canvas'}]}
  />).toJSON();
  expect(feature).toMatchSnapshot();
});