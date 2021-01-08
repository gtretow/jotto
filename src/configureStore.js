import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import ReduxThunk from "redux-thunk";

export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

//store interactions:
// Consult success piece of state
// could pass as a prop
// add to guessedWords and update success

export default createStoreWithMiddleware(rootReducer);
