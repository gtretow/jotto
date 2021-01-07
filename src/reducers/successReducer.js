import { actionTypes } from "../actions";


//state = array of guessed words
// action - action to be reduced
// returns new success state

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;

    default:
      return state;
  }
};
