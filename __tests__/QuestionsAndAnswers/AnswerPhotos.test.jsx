import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import AnswerPhotos from '../../client/src/components/questionsandanswers/AnswerPhotos.jsx';
Enzyme.configure({ adapter: new Adapter()});

const images = [
  {
    id: 4699586,
    url: 'http://res.cloudinary.com/dtnikmimx/image/upload/v1641450048/t8kuusgqlzx4x0qpigrv.jpg'
  },
  {
    id: 4699587,
    url: 'http://res.cloudinary.com/dtnikmimx/image/upload/v1641450048/t8kuusgqlzx4x0qpigrv.jpg'
  }
]
describe('<AnswerPhotos />', () => {
  test('render correctly', () => {
    const preview = renderer.create(<AnswerPhotos photos={images} />).toJSON();
    expect(preview).toMatchSnapshot();
  });
  test('open modal when click photo', () => {
    const photos = shallow(<AnswerPhotos photos={images} />);
    expect(photos.find('Modal').at(0).prop('show')).toBe(false);
    photos.find('.q_ans_photos').at(0).simulate('click');
    expect(photos.find('Modal').at(0).prop('show')).toBe(true);
    expect(photos.find('Modal').at(1).prop('onHide')).toBeDefined();
  });
});