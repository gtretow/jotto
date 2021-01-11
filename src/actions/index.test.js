import { correctGuess, actionTypes } from "./";
import moxios from "moxios";
//para types mutaveis o "===" pode dar errado, porque mesmo que ele seja igual "{} === {}" eles são diferentes
// .toBe = "===" só podemos usa-lo parao objetos imutaveis

describe("correctGuess", () => {
  test("returns an action with type `CORRECT_GUESS", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe("getSecretWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response word to state', () => {
    
  })
  
});
