import React from 'react';
import renderer from 'react-test-renderer';
import StarRating from '../../client/src/components/productdetails/StarRating.jsx';

test('renders StarRating component correctly', () => {
  const starRating = renderer.create(<StarRating
    ratings={{1: '23', 2: '7', 3: '49', 4: '36', 5: '45'}}
  />).toJSON();
  expect(starRating).toMatchSnapshot();
});

test('renders StarRating component correctly', () => {
  const starRating = renderer.create(<StarRating
    ratings={{1: '23', 2: '7', 3: '49', 4: '36', 5: '45'}}
  />).root;

  const rating = starRating.findAllByProps({
    ratingValue: 70
  });
  expect(rating).toBeDefined();
});