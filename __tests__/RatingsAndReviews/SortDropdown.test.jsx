import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SortDropdown from '../../client/src/components/ratingandreviews/Components/Reviews/SortDropdown.jsx'

describe('<SortDropdown />', () => {
    const sortBy = () => {}
      it('Should inherit a sort by method', () => {
          const sortDropdown = renderer
          .create(<SortDropdown sortBy={sortBy}/>)
          .toJSON();
          expect(sortDropdown).toMatchSnapshot()
        });
        
        // it('Should have an initial state of relevant', () => {
    
        // })
});