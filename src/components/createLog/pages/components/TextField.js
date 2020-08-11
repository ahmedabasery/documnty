import React from "react";

const TextField = ({ input, meta, label, rows }) => {
  return (
    <div className="ui form ">
      <div className="field">
        <label>{label}</label>
        <textarea {...input} rows={rows} style={{ resize: "none" }}></textarea>
      </div>
    </div>
  );
};

export default TextField;
