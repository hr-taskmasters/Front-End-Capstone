import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../../client/src/components/ratingandreviews/Components/Reviews/Search.jsx'


describe('<Search />', () => {
    const search ='';


    it('Should correctly render the search output', () => {
        const searchOutput = renderer
        .create(<Search value={search}/>)
        .toJSON();
        expect(searchOutput).toMatchSnapshot()
    })

})