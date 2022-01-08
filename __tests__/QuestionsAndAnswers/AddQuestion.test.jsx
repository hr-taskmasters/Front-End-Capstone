import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
  test('render a modal', () => {
    expect(wrapper.find('Modal')).toHaveLength(1);
  });
  test('modal has children', () => {
    expect(wrapper.find('Modal').children()).toHaveLength(3);
  })
  test('opem modal when button is clicked', () => {
    expect(wrapper.find('Modal').prop('show')).toBe(false);
    wrapper.find('.question_add').simulate('click');
    expect(wrapper.find('Modal').prop('show')).toBe(true);
  });
  test('cancel button click', () => {
    wrapper.find('.addQ_cancel_btn').simulate('click');
    expect(wrapper.find('Modal').prop('show')).toBe(false);
  });
  // test('submit button click', () => {
  //     wrapper.find('.addQ_submit_btn').simulate('click');
  //     expect(wrapper.find('.addQ_submit_btn')).toHaveBeenCalledTimes(1);
  //   });
  });

  describe('form component', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<AddQuestion product_name='Camo Onesie' onChange={onChangeMock}/>);
    const form = wrapper.find('Form');
    test('render a form', () => {
      expect(form).toHaveLength(1);
    });
    test('test onChange for body input', () => {
      form.find('.add_question_body_input').simulate('change', { target: {value: 'this is a test body'}});
      //expect(form.find('.add_question_body_input').prop('value')).toEqual('this is a test body');
      expect(onChangeMock.mock.calls.length).toBe(0);
    });
    test('test onChange for name input', () => {
      form.find('.add_question_name_input').simulate('change', { target: {value: 'this is a test name'}});
      expect(onChangeMock.mock.calls.length).toBe(0);
    });
    test('test onChange for name input', () => {
      form.find('.add_question_email_input').simulate('change', { target: {value: 'this is a test email'}});
      expect(onChangeMock.mock.calls.length).toBe(0);
    });
  });

