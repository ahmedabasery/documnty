import React from "react";

const InputSearch = ({ meta, label, input }) => {
  const className = `ui icon input ${
    meta.error && meta.touched ? "error" : ""
  }`;
  return (
    <div className="field">
      <label className="mylabel">{label}</label>
      <div className={className}>
        <input
          {...input}
          type="text"
          placeholder="Search..."
          autoComplete="off"
        />
        <i className="inverted circular search link icon"></i>
      </div>
    </div>
  );
};

export default InputSearch;
