import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('Should render header correctly', () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // console.log(renderer.getRenderOutput());

  const wrapper = shallow(<Header />);
  // expect(wrapper.find('h1').text()).toBe('Expensify');
  expect(toJSON(wrapper)).toMatchSnapshot();
})
