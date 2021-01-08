import { createStore } from "redux";
import rootReducer from "./reducers";


//store interactions:
// Consult success piece of state
// could pass as a prop
// add to guessedWords and update success

export default createStore(rootReducer);
