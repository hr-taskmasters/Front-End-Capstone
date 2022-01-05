import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Images from '../../client/src/components/ratingandreviews/Components/Reviews/Images.jsx'

describe('<Images />', () => {
    const imageTest = {id: 2140839, url: "https://i.imgur.com/760q3rR.jpg"};
    it('should correctly render a single image thumbnail', () =>{
        const image = renderer
        .create(<Images image={imageTest.url}/>)
        .toJSON();
        expect(image).toMatchSnapshot()

    });
});