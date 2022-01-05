import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Container} from 'react-bootstrap';
import Questions from '../../client/src/components/questionsandanswers/Questions.jsx';
import IndividualQuestion from '../../client/src/components/questionsandanswers/IndividualQuestion.jsx';
Enzyme.configure({ adapter: new Adapter()});

const zeroQuestion = [];
const oneQuestion = [{
  question_id: 426448,
  question_body: 'Is it water proof?',
  question_date: "2021-09-24T00:00:00.000Z",
  question_helpfulness: 6,
  asker_name: "username123",
  answers: []
  }];
const threeQuestion = [
  {
  question_id: 426447,
  question_body: 'Is it water proof?',
  question_date: "2021-09-24T00:00:00.000Z",
  question_helpfulness: 6,
  asker_name: "username123",
  answers: []
  },
  {
    question_id: 563130,
    question_body: 'Is it water proof?',
    question_date: "2021-09-24T00:00:00.000Z",
    question_helpfulness: 6,
    asker_name: "username123",
    answers: []
  },
  {
      question_id: 123456,
      question_body: 'Is it water proof?',
      question_date: "2021-09-24T00:00:00.000Z",
      question_helpfulness: 6,
      asker_name: "username123",
      answers: []
  }
];

test('Question list has classname', () => {
  const wrapper = mount(<Questions questions={oneQuestion}/>);
  expect(wrapper.find('.q_questions_sessions')).toHaveClassName('q_questions_sessions');
});
test('Render question lists', () => {
  const wrapper = mount(<Questions questions={oneQuestion} />);
  expect(wrapper).toContainMatchingElements(1, '.q_questions_sessions');
});

test('Render an empty question component', () => {
  const wrapper = shallow(<Questions questions={zeroQuestion} />);
  expect(wrapper.find(IndividualQuestion)).toHaveLength(0);
});
test('Render one question component', () => {
  const wrapper = shallow(<Questions questions={oneQuestion} />);
  expect(wrapper.find(IndividualQuestion)).toHaveLength(1);
});
test('Render three question components', () => {
  const wrapper = shallow(<Questions questions={threeQuestion} />);
  expect(wrapper.find(IndividualQuestion)).toHaveLength(3);
});


