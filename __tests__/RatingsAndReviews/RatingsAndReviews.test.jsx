import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import RatingsAndReviews from '../../client/src/components/ratingandreviews/RatingAndReviews.jsx';

// Enzyme.configure({ adapter: new Adapter() });

//     const emptyReview = [];

// xtest('Renders an empty review component', () =>{
//     const wrapper = mount(<RatingsAndReviews ratings={emptyReview}/>);
//     expect(wrapper). toContainMatchingElements(0, 'li')
// })
// xtest('Renders two sub components. A reviewList component and a ratings component.', () =>{
//     const wrapper = mount(<RatingsAndReviews />);
//     expect(wrapper). toContainMatchingElements('Ratings', 'l')
// })

describe('<RatingsAndReviews />', () => {
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
    };
    const product = { id: 42366};

    it('Should correctly render', () => {
        const ratingsAndReviews = renderer
        .create(<RatingsAndReviews product={product.id} metaData={metaData}/>)
        .toJSON();
        expect(ratingsAndReviews).toMatchSnapshot()
    })


})