import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./input";

//Motivo de criarmos essa store Factory
//Could not find "store" in the context of "Connect(Input)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(Input) in connect options.
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
  /*   console.log(wrapper.debug());
   */
};

//.dive() return the react child component of the shallow wrapper
//observar oo console.log para ver como funciona

/* setup();
só está aqui para vermos o console.log
 */
describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
  });
  describe("word has not been guessed", () => {
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test(" does not renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    test("does not renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("does not renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });

    test("does not renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("update state", () => {});
