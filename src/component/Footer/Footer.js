import React from "react";
import FilterLink from "../../container/FilterLink/FilterLink";
import { visibilityFilter } from "../../store/action";

const Footer = () => (
  <div>
    <span>show :</span>
    <FilterLink filter={visibilityFilter.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={visibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={visibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
