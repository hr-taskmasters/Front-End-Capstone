import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Search from '../../client/src/components/questionsandanswers/Search.jsx';
import { Button, Modal, Form, FloatingLabel} from 'react-bootstrap';
Enzyme.configure({ adapter: new Adapter()});

describe('<Search />', () => {
  const onChangeMock = jest.fn();
  test('render correctly', () => {
    const search = renderer.create(<Search searchTerm={'searchTerm'} setSearchTerm={onChangeMock}/>).toJSON();
    expect(search).toMatchSnapshot();
  });
  test('test onChange', () => {
    const wrapper = shallow(<Search searchTerm={'searchTerm'} setSearchTerm={onChangeMock}/>);
    wrapper.find('#q_searchinput').simulate('change', { target: {value: 'test'}});
    expect(onChangeMock.mock.calls.length).toBe(1);
  });
});