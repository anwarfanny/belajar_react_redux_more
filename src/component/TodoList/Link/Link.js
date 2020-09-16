import React from "react";
import Proptype from "prop-types";

const Link = ({ active, children, onClick }) => (
  <button onClick={onClick} disabled={active} style={{ marginLeft: "40px" }}>
    {children}
  </button>
);

Link.prototype = {
  active: Proptype.bool.isRequired,
  children: Proptype.node.isRequired,
  onClick: Proptype.func.isRequired,
};

export default Link;
