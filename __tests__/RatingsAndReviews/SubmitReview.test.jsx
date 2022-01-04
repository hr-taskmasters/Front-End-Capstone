import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SubmitReview from '../../client/src/components/ratingandreviews/Components/Reviews/SubmitReview.jsx'

describe('<SubmitReview />', () => {
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

    it('Should correctly render the SubmitReview component', () => {
        const submit = renderer
        .create(<SubmitReview metaData={metaData} product={product}/>)
        .toJSON();
        expect(submit).toMatchSnapshot()
    });

});