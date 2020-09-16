import { combineReducers, conbineReducers } from "redux";
import todos from "./todos.js";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter,
});
