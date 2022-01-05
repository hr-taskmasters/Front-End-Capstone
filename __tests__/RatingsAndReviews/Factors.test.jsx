import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Factors from '../../client/src/components/ratingandreviews/Components/Ratings/Factors.jsx'

describe('<Factors />', () =>{

    it('should correctly render factors', () => {
        const metaData = {
            characteristics :{
                Comfort: {id: 142034, value: "3.1627906976744186"},
                Fit: {id: 142032, value: "2.9021739130434783"},
                Length: {id: 142033, value: "2.8045977011494253"},
                Quality: {id: 142035, value: "3.1976744186046512"}
            },
            product_id: "42366"
        }
        
        const factors = renderer
        .create(<Factors  metaData={metaData} />)
        .toJSON();
        expect(factors).toMatchSnapshot();
    });
});


