import React from "react";

const Tap = ({ isActive, children }) => {
  const display = isActive ? "" : "none";
  return (
    <div style={{ display }} className="ui container">
      {children}
    </div>
  );
};

export default Tap;
