import { visibilityFilter } from "../action/index";

const visibilityFilters = (state = visibilityFilter, action) => {
  switch (action.type) {
    case "SET_VISIBILITY-FILTER":
      return action.filter;
    default:
      return state;
  }
};
export default visibilityFilters;
