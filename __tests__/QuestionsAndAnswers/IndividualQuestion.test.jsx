import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import IndividualQuestion from '../../client/src/components/questionsandanswers/IndividualQuestion.jsx';
Enzyme.configure({ adapter: new Adapter()});

const question = {
  question_id: 426448,
  question_body: 'Is it water proof?',
  question_date: "2021-09-24T00:00:00.000Z",
  question_helpfulness: 6,
  asker_name: "username123",
  answers: []
};
test('Render correctly', () => {
  const Question = renderer.create(<IndividualQuestion question={question} product_name='Camo Onesie' />).toJSON();
  expect(Question).toMatchSnapshot();
})
test('Render the question component', () => {
  const wrapper = shallow(<IndividualQuestion question={question} product_name='Camo Onesie' />);
  expect(wrapper.find('.q_title').text()).toEqual('Q:');
  expect(wrapper.find('#q_grid_row1_col3')).toContainMatchingElement('span');
  expect(wrapper).toContainExactlyOneMatchingElement('Answers');
});
