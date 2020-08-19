import React from "react";

const TextField = ({ input, meta, label, rows, showError = false }) => {
  const Er = meta.error && showError;
  const classname = `field${Er ? " error" : ""}`;
  return (
    <div className="ui form">
      <div className={classname}>
        <label>{label}</label>
        <textarea {...input} rows={rows} style={{ resize: "none" }}></textarea>
      </div>
    </div>
  );
};

export default TextField;
