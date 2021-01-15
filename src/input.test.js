import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input, { UnconectedInput } from "./input";

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

    test("does not renders input box", () => {
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

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(true);
  });

  test("`guessWord` action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("guessWord action creator call", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";
  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
    };

    wrapper = shallow(<UnconectedInput {...props} />);

    const submitButton = findByTestAttr(wrapper, "submit-button");

    //add value to input box
    wrapper.setState({ currentGuess: guessedWord });
    submitButton.simulate("click", { preventDefault() {} });
  });

  it("calls guessWord when button is clicked", () => {
    const guessWordcallCount = guessWordMock.mock.calls.length;
    expect(guessWordcallCount).toBe(1);
  });

  test("calls guessWord with input value as argument", () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });

  /* test("actionCreator runs when expected", () => {
    const guessWordMock = jest.fn();

    //set up app component with guessWordMock as the guessWord prop
    const wrapper = shallow(<UnconectedInput guessWord={guessWordMock} />);

    //simulate click
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click");

    //check to see if mock ran
    const guessWordCallCount = guessWordMock.mock.calls.length;

    expect(guessWordCallCount).toBe(1);
  }); */

  test("input box clears on submit", () => {
    expect(wrapper.state("currentGuess")).toBe("");
  });
});
