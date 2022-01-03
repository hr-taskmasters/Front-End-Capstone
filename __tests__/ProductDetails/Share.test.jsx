import React from 'react';
import renderer from 'react-test-renderer';
import Share from '../../client/src/components/productdetails/Share.jsx';

test('renders share component correctly', () => {
  const share = renderer.create(<Share />).toJSON();
  expect(share).toMatchSnapshot();
});
