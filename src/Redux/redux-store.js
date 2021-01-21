import { combineReducers, createStore } from "redux";
import mountingReducer from "./mountingReducer";
let reducers = combineReducers({
    mountingPage:mountingReducer,
});
let store = createStore(reducers)
export default store;