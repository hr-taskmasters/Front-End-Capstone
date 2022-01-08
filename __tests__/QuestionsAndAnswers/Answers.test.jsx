import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Answers from '../../client/src/components/questionsandanswers/Answers.jsx';
Enzyme.configure({adapter: new Adapter()});

const zeroQuestion = [];
const oneQuestion = [{
  question_id: 426448,
  question_body: 'Is it water proof?',
  question_date: "2021-09-24T00:00:00.000Z",
  question_helpfulness: 6,
  asker_name: "username123",
  answers: [{
    answer_id: 5269564,
    answerer_name: "test",
    body: "test",
    date: "2022-01-06T00:00:00.000Z",
    helpfulness: 1,
    photos: ['http://res.cloudinary.com/dtnikmimx/image/upload/v1641450048/t8kuusgqlzx4x0qpigrv.jpg']
  }]
}];

describe('<Answers /> with props', () => {
  test('Render an empty answer component', () => {
    const wrapper = shallow(<Answers question={zeroQuestion}/>);
    expect(wrapper.find('IndividualAnswer')).toHaveLength(0);
  });
  test('Render answer compoment correctly', () => {
    const wrapper = renderer.create(<Answers question={oneQuestion}/>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test add answer button', () => {
  const onClickmock = jest.fn();
  const wrapper = shallow(<Answers question={oneQuestion} onClick={onClickmock}/>);
  test('Render an add Answer button', () => {
    expect(wrapper).toContainMatchingElement('AddAnswer');
  });
  test('not render collapse Btn', () => {
    expect(wrapper.find('.a_collapseBtn')).toHaveLength(0);
  });
});

