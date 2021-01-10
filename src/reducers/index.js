import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWord from "./successReducer";


export default combineReducers({

    success,
    guessedWord,
})