import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ReviewBody from '../../client/src/components/ratingandreviews/Components/Reviews/ReviewBody.jsx'

describe('<ReviewBody />', () => {
    const review = {
        body: "Wow this product is amazing, 100/10 recommend. I own 1000 of these muahahaha. ",
        date: "2021-11-10T00:00:00.000Z",
        helpfulness: 6,
        photos: [],
        rating: 5,
        recommend: true,
        response: null,
        review_id: 1094674,
        reviewer_name: "BananaBoy123",
        summary: "Is this really the best purchase ever?"
    } 
    const slicedReview =review.body.slice(0, 250);
    it('Should correctly render the reviewBody', () => {
        const reviewBody = renderer
        .create(<ReviewBody review={slicedReview}/>)
        .toJSON();
        expect(reviewBody.length).toBeLessThan(250)

    });

});