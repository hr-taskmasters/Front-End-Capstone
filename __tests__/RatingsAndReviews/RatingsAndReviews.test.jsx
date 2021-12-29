import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingsAndReviews from '../../client/src/components/ratingandreviews/RatingAndReviews.jsx';

Enzyme.configure({ adapter: new Adapter() });

    const emptyReview = [];

test('Renders an empty review component', () =>{
    const wrapper = mount(<RatingsAndReviews ratings={emptyReview}/>);
    expect(wrapper). toContainMatchingElements(0, 'li')
})