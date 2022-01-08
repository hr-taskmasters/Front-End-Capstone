import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ReviewTile from '../../client/src/components/ratingandreviews/Components/Reviews/ReviewTile.jsx'

Enzyme.configure({adapter: new Adapter()});

describe('<ReviewTile />', () => {
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
    
    it('Should correctly render a review tile', () => {
        const reviewTile = renderer
        .create(<ReviewTile review={review}/>)
        .toJSON();
        expect(reviewTile).toMatchSnapshot()
    });

    const wrapper = mount(<ReviewTile key={review.review_id} review={review}/>);
    it('should render a way to mark a review helpful', () => {
        wrapper.find('.review-helpful').simulate('click')
        expect(review.helpfulness).toEqual(review.helpfulness)
    })
    it('should render a way to report a review', () => {
        wrapper.find('.review-report').simulate('click')
        expect(review).toEqual(review)
    })
    
   
});

