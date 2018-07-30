import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";
// import toJSON from 'enzyme-to-json';

test("should render Header correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogout on button click", () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});

// const renderer = new ReactShallowRenderer();
// renderer.render(<Header />);
// expect(renderer.getRenderOutput()).toMatchSnapshot();
// expect(wrapper.find('h1').text()).toBe('Expensify');
// expect(toJSON(wrapper)).toMatchSnapshot();
