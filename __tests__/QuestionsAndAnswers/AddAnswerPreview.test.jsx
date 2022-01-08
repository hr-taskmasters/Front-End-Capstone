import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import AddAnswerPreview from '../../client/src/components/questionsandanswers/AddAnswerPreview.jsx';
Enzyme.configure({ adapter: new Adapter()});

const photos = ['http://res.cloudinary.com/dtnikmimx/image/upload/v1641450048/t8kuusgqlzx4x0qpigrv.jpg', 'http://res.cloudinary.com/dtnikmimx/image/upload/v1641450048/t8kuusgqlzx4x0qpigrv.jpg'];
describe('<AddAnswerPreview />', () => {
  test('render correctly', () => {
    const preview = renderer.create(<AddAnswerPreview photos={photos} />).toJSON();
    expect(preview).toMatchSnapshot();
  });
});