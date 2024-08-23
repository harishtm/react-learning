import { combineReducers } from "redux";
// import { counterReducer } from '../reducers/counterReducer';
import modeReducer from "../slices/modeSlice";
import counterReducer from "../slices/counterSlice";

const rootReducer = combineReducers({
    // mode: modeReducer,
    count: counterReducer,
});

export default rootReducer;