import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionsAndAnswers from '../../client/src/components/questionsandanswers/QuestionsAndAnswers.jsx';
import IndividualQuestion from '../../client/src/components/questionsandanswers/IndividualQuestion.jsx';
Enzyme.configure({ adapter: new Adapter()});

const product = {
  id: 42366,
  campus: "hr-lax",
  name: "Camo Onesie",
  slogan: "Blend in to your crowd",
  updated_at: "2021-08-13T14:39:39.968Z",
  category: "Jackets",
  created_at: "2021-08-13T14:39:39.968Z",
  default_price: "140.00",
  description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
 };
describe('Test Load More Questions Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<QuestionsAndAnswers product={product}/>);
    wrapper.find('#loadBtn').simulate('click');
    //expect(wrapper.find(IndividualQuestion)).toHaveLength(6);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })
});