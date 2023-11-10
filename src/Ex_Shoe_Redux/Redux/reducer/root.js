import { combineReducers } from "redux";
import { shoeReducer } from ".";

export let rootReducer = combineReducers({
  shoeReducer: shoeReducer,
});
