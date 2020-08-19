import React from "react";

export default ({ header, children, height, showError = false }) => {
  const style = height ? { height } : null;
  const headClassName = `ui secondary segment headsegment ${
    showError ? "inverted red" : "normal"
  }`;
  const segmentClassName = `ui segments${showError ? " errorsegment" : ""}`;
  return (
    <div className={segmentClassName}>
      <div className={headClassName}>
        <h5>{header}</h5>
      </div>
      <div className="ui  segment" style={style}>
        {children}
      </div>
    </div>
  );
};
