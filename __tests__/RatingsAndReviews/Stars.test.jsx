import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Stars from '../../client/src/components/ratingandreviews/Components/Ratings/Stars.jsx'

describe('<Stars />', () =>{
    const ratings = {1: "23", 2: "8", 3: "50", 4: "36", 5: "47"};


    it('Should correctly render the star rating', () => {
        const stars = renderer
        .create(<Stars ratings={ratings}/>)
        .toJSON();
        expect(stars).toMatchSnapshot()
    })
})