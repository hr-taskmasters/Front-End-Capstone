import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IndividualAnswer from '../../client/src/components/questionsandanswers/IndividualAnswer.jsx';
import { Image } from 'react-bootstrap';
Enzyme.configure({adapter: new Adapter()});

const answer = {
  answer_id: 5269193,
  body: "yes",
  date: "2021-12-30T00:00:00.000Z",
  answerer_name: "Seller",
  helpfulness: 1,
  photos: ['https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80']
};
const answer2 = {
  answer_id: 3990255,
  body: "yes, free shipping",
  date: "2021-09-24T00:00:00.000Z",
  answerer_name: "mary",
  helpfulness: 1,
  photos: ['https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80']
};

describe('<IndividualAnswer />', () => {
  const wrapper = mount(<IndividualAnswer answer={answer} key={5269193} />);
  test('Should render an answer body', () => {
    expect(wrapper.find('#q_a_row1').text()).toContain('yes');
  });
  test('Should render bold if answerer is Seller', () => {
    expect(wrapper.find('#q_a_row2_name')).toContainMatchingElement('b');
  });
  test('Should render a helpful link', () => {
    const helpful = wrapper.find('#q_a_row2_markAHelpful');
    expect(helpful).toContainMatchingElement('label');
    expect(helpful.find('label').text()).toEqual(' Helpful? ');
  });
  test('Should render a report link', () => {
    const report = wrapper.find('#q_a_row2_markAReport');
    expect(report).toContainMatchingElement('u');
    expect(report.find('u').text()).toEqual('Report');
  });
  test('Should display image thumbnail if there is imageurl in photos', () => {
    const photos = wrapper.find('.q_ans_photos');
    expect(photos).toContainMatchingElement('Image');
  });
});
