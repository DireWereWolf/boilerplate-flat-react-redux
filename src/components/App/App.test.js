import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('App should rendered as expected', () => {
  const component = shallow(<App/>);
  const tree = toJson(component);

  // console.log(tree);

  // Test for inner contains of element
  // expect(component.contains('Here app components')).toBe(true);

  // Creating new snapshot
  expect(tree).toMatchSnapshot();
});
