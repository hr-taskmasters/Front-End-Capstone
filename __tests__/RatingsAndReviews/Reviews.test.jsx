import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Reviews from '../../client/src/components/ratingandreviews/Components/Reviews/Reviews.jsx'

describe('<Reviews />', () => {
    const reviewList = [ {
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
    ]
    const product = {
        name: "Camo Onesie"
    }
    const metaData = {
        characteristics :{
            Comfort: {id: 142034, value: "3.1627906976744186"},
            Fit: {id: 142032, value: "2.9021739130434783"},
            Length: {id: 142033, value: "2.8045977011494253"},
            Quality: {id: 142035, value: "3.1976744186046512"}
        },
        product_id: "42366",
        ratings: {1: "23", 2: "8", 3: "50", 4: "36", 5: "47"},
        recommended : {false: "68", true: "96"}
    }
    const sortBy = () => {}

    it('Should correctly render the review list', () => {
        const reviews = renderer
        .create(<Reviews sortBy={sortBy} reviewList={reviewList} metaData={metaData} product={product}/>)
        .toJSON();
        expect(reviews).toMatchSnapshot()
    });

});