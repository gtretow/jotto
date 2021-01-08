import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./input";

//Motivo de criarmos essa store Factory
//Could not find "store" in the context of "Connect(Input)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(Input) in connect options.
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store ={store}/>).dive().dive();
  return wrapper;
/*   console.log(wrapper.debug());
 */};

//.dive() return the react child component of the shallow wrapper
//observar oo console.log para ver como funciona

/* setup();
só está aqui para vermos o console.log
 */
describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {});

    test("renders input box", () => {});

    test("renders submit button", () => {});
  });

  describe("word has been guessed", () => {
    test("renders component without error", () => {});

    test("does not renders input box", () => {});

    test("does not renders submit button", () => {});
  });
});

describe("update state", () => {});
