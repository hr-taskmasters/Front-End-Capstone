import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import AddQuestion from '../../client/src/components/questionsandanswers/AddQuestion.jsx';
import { Button, Modal, Form, FloatingLabel} from 'react-bootstrap';
Enzyme.configure({ adapter: new Adapter()});

describe('<AddQuestion />', () => {
  const wrapper = shallow(<AddQuestion product_name='Camo Onesie'/>);
  test('render an add question button', () => {
    expect(wrapper.find('.question_add')).toContainMatchingElements(1, 'Button');
  })
  test('render title', () => {
    expect(wrapper.find('#question_modal_title')).toContainMatchingElements(1, 'h3');
    expect(wrapper.find('#question_modal_title').text()).toContain('Ask your question');
  });
  test('render subtitle', () => {
    expect(wrapper.find('#question_modal_subtitle')).toContainMatchingElements(1, 'h6');
    expect(wrapper.find('#question_modal_subtitle').text()).toContain('About the Camo Onesie');
  });
  test('render a form', () => {
    expect(wrapper).toContainMatchingElements(1, 'Form');
  });
});

describe('form component', () => {
  const wrapper = shallow(<AddQuestion product_name='Camo Onesie'/>);
  const form = wrapper.find('Form');
  test('should have input for question body', () => {
    expect(form.find('.add_question_body_input')).toHaveLength(1);
  });
  test('should have input for name', () => {
    expect(form.find('.add_question_name_input')).toHaveLength(1);
  });
  test('should have input for email', () => {
    expect(form.find('.add_question_email_input')).toHaveLength(1);
  });
  test('should have a submit button', () => {
    expect(wrapper.find('.addQ_submit_btn')).toHaveLength(1);
  });
  test('should have a cancel button', () => {
    expect(wrapper.find('.addQ_cancel_btn')).toHaveLength(1);
  });
});

test('Render correctly', () => {
  const Question = renderer.create(<AddQuestion product_name='Camo Onesie'/>).toJSON();
  expect(Question).toMatchSnapshot();
});
