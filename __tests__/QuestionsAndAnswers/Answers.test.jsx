import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Answers from '../../client/src/components/questionsandanswers/Answers.jsx';
import AddAnswer from '../../client/src/components/questionsandanswers/AddAnswer.jsx';
Enzyme.configure({adapter: new Adapter()});

const zeroQuestion = [];
const oneQuestion = [{
  question_id: 426448,
  question_body: 'Is it water proof?',
  question_date: "2021-09-24T00:00:00.000Z",
  question_helpfulness: 6,
  asker_name: "username123",
  answers: []
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
  test('Render an add Answer button', () => {
    const wrapper = mount(<Answers question={oneQuestion}/>);
    expect(wrapper).toContainMatchingElement('AddAnswer');
  })
})