import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWord from "./successReducer";
import secretWord from "./secretWordReducer";

export default combineReducers({
  success,
  guessedWord,
  secretWord,
});
