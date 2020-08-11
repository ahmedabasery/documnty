import React from "react";

export default ({ header, children, height }) => {
  const style = height ? { height } : null;
  return (
    <div className="ui segments">
      <div className="ui secondary segment headsegment">
        <h5>{header}</h5>
      </div>
      <div className="ui  segment" style={style}>
        {children}
      </div>
    </div>
  );
};
