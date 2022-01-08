import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import QuestionsAndAnswers from '../../client/src/components/questionsandanswers/QuestionsAndAnswers.jsx';
import Search from '../../client/src/components/questionsandanswers/Search.jsx';
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

test('Render Questions and Answers component correctly', () => {
  const questionsandanswers = renderer.create(<QuestionsAndAnswers product={product} />).toJSON();
  expect(questionsandanswers).toMatchSnapshot();
});
test('Render a title', () => {
  const wrapper = mount(<QuestionsAndAnswers product={product}/>);
  expect(wrapper.find('.questions_widget_header').text()).toEqual('QUESTIONS & ANSWERS');
})
describe('Load More Questions Button component', () => {
    const wrapper = mount(<QuestionsAndAnswers product={product}/>);
  test('Should be defined', () => {
    const loadMoreBtn = wrapper.find('#loadBtn');
    expect(loadMoreBtn).toBeDefined();
  });
  test('Should not render a collapse button', () => {
    expect(wrapper.find('#collapseBtn')).toHaveLength(0);
  });
});

describe('Search bar', () => {
  test('Should render search bar', () => {
    const wrapper = mount(<QuestionsAndAnswers product={product}/>);
    expect(wrapper).toContainMatchingElement('Search');
  });
});

describe('Questions list container', () => {
  const wrapper = mount(<QuestionsAndAnswers product={product}/>);
  test('Should render container', () => {
    expect(wrapper).toContainExactlyOneMatchingElement('Container');
  });
  test('Should render add Question button', () => {
    expect(wrapper.find('#q_list_addQuestion')).toContainExactlyOneMatchingElement('AddQuestion')
  })
});
